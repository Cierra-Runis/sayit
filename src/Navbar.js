import './Navbar.css'

import * as React from 'react';
import { AppBar, Toolbar, IconButton, List, Button, TextField, Typography, ListItem, ListItemAvatar, Avatar, ListItemText, Divider, Box } from '@mui/material/';
import MenuIcon from '@mui/icons-material/Menu'

function Navbar() {
  return (
    <div className="navbar">
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            SayIt
          </Typography>
          <Button color="inherit">登录</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;