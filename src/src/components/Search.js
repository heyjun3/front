import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';

export default function CustomizedInputBase() {
  const [info, setInfo] = React.useState('')

  const handleSubmit = (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget)
      const value = data.get('amazon')
      console.log(value)
      setInfo(value)
    //   fetch(`http://localhost/search/${value}`, {method: 'GET', mode: 'cors'})
    //   .then(res => res.json())
    //   .then(data => console.log(data))
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
        placeholder="Search Amazon"
        inputProps={{ 'aria-label': 'search amazon' }}
        name='amazon'
      />
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
    {info ? <p>{info}</p> : <p>aaa</p>}
    </div>
    
  );
}
