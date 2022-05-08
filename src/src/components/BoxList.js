import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';
import DeleteIcon from '@mui/icons-material/Delete';
import {Link} from 'react-router-dom';


export default function BoxList() {
  const [filenames, setFilenames] = React.useState([]);
  React.useEffect(() => {
    fetch('http://localhost:5000/list', {method: 'GET', mode: 'cors'})
    .then(res => res.json())
    .then(data =>
        setFilenames(data['list'])
      )
  }, [])

  const deleteFile = (value) => {
    setFilenames(
      filenames.filter((file) => (file !== value))
    )
    fetch(`http://localhost:5000/deleteFile/${value}`, {method: 'DELETE', mode: 'cors'})
    .then(res => res.json())
    .then(data => console.log(data))
  }

  return (
    <List sx={{ width: '100%', maxWidth: 500, bgcolor: 'background.paper', margin: 'auto', mt: '10px' }}>
      {filenames.map((value) => {
        const labelId = `checkbox-list-label-${value}`;

        return (
          <ListItem
            key={value}
            secondaryAction={
              <IconButton edge="end" aria-label="comments" onClick={() => deleteFile(value)}>
                <DeleteIcon />
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton component={Link} to="/" role={undefined} dense >
              <ListItemText align="center" id={labelId} primary={value} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}
