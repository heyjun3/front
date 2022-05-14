import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import RenderLineChart from './LineChart';



export default function CustomizedInputBase() {
  const [data, setData] = React.useState([])

  const handleSubmit = (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget)
      const value = data.get('amazon')
      if (value){
        console.log(value)
        fetch(`http://localhost:5000/search/${value}`, {method: 'GET', mode: 'cors'})
        .then(res => res.json())
        .then(data => setData(data))
      } else {
        setData([])
      }
  }
  return (
    <div>
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '50%' , margin: 'auto', mt: '50px'}}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search by Amazon, Enter ASIN Code"
        inputProps={{ 'aria-label': 'search amazon' }}
        name='amazon'
      />
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
      {data.length !== 0 ? <RenderLineChart data={data}/> : <p></p>}
    </div>
    
  );
}
