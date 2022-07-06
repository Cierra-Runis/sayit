import './Navbar.css'

import * as React from 'react';
import { AppBar, Toolbar, IconButton, Button, Typography, Avatar } from '@mui/material/';
import MenuIcon from '@mui/icons-material/Menu'

function Navbar({ username }) {
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
          <div style={{ display: "flex", alignItems: "center" }}>
            {
              username === undefined ?
                <Button color="inherit">登录</Button> :
                <>
                  <Typography fontSize={15}>{username}</Typography>
                  <div style={{ width: "10px" }}></div>
                  <IconButton>
                    <Avatar alt='德川' src='/favicon.ico'></Avatar>
                  </IconButton>
                </>
            }
          </div>

        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
