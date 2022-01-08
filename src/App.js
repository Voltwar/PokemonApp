import React from 'react';
import * as Mui from '@mui/material'
import { ThemeProvider } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import * as R from 'ramda'

import './App.css';
import Routes from './Routes'
import theme from './Theme';


const links = [
  {
    name: 'Home',
    url: '/'
  },
  {
    name: 'Pokemon',
    url: '/pokemon'
  },
  {
    name: 'Locations',
    url: '/locations'
  },
  {
    name: 'Berries',
    url: '/berries'
  },
  {
    name: 'Items',
    url: '/items'
  },
  {
    name: 'Moves',
    url: '/moves'
  },
  {
    name: 'Contests',
    url: '/contests'
  },
  {
  name: 'Games',
  url: '/games'
  }
]


function App() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  return (
    <> 
    <ThemeProvider theme={theme}>
    <Mui.AppBar position="static">
      <Mui.Box display="flex" flexWrap="nowrap" justifyContent="space-between">
      <Mui.IconButton onClick={(evt) => setAnchorEl(evt.currentTarget)}>
        <MenuIcon />
      </Mui.IconButton>
      <Mui.Menu anchorEl={anchorEl}
        open={open}
        onClose={() => setAnchorEl(null)}>
          {R.map((link) => (<Mui.MenuItem key={link.url} component="a" href={link.url}>{link.name}</Mui.MenuItem>), links)}
      </Mui.Menu>
      <Mui.Typography>Pokemon</Mui.Typography>
      </Mui.Box>
    </Mui.AppBar>
      <Routes />
    </ThemeProvider>
    </>  
  );
}

export default App;

