import './App.css';

import * as React from 'react';
import { AppBar, Toolbar, IconButton, List, Button, TextField, Typography, ListItem, ListItemAvatar, Avatar, ListItemText, Divider, Box } from '@mui/material/';
import MenuIcon from '@mui/icons-material/Menu'
import Navbar from './Navbar';



function App() {
  return (

    <div className="App">

      <Navbar />

      <header className="App-header">
        <div style={{ height: "70px", backgroundColor: "#282c34" }}></div>
        <List sx={{ width: '100%', maxWidth: '97vw' }}>

          <Divider variant="middle" component="li">2019/8/10 11:45:14</Divider>

          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="淳平" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary={
                <Box sx={{ fontSize: "14px" }}>
                  <React.Fragment>{"淳平"}
                  </React.Fragment>
                </Box>
              }
              secondary={
                <Box sx={{ fontSize: "16px" }}>
                  <React.Fragment>
                    {"人間の三大欲求は、食欲、性欲、睡眠欲。その中でも食欲は人によって生命維持のために必要報道であり、動物系においては快感を本当らしい。優先して行動するようプログラムされております。"}
                  </React.Fragment>
                </Box>
              }
            />
          </ListItem>

          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="淳平" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary={
                <Box sx={{ fontSize: "14px" }}>
                  <React.Fragment>{"淳平"}
                  </React.Fragment>
                </Box>
              }
              secondary={
                <Box sx={{ fontSize: "16px" }}>
                  <React.Fragment>
                    {"食事を取ることにより、満足感、また、美味しいものを食べることにより、喜びは精神上好ましい影響を与えます。"}
                  </React.Fragment>
                </Box>
              }
            />
          </ListItem>

          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="淳平" src="/static/images/avatar/3.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary={
                <Box sx={{ fontSize: "14px" }}>
                  <React.Fragment>{"淳平"}
                  </React.Fragment>
                </Box>
              }
              secondary={
                <Box sx={{ fontSize: "16px" }}>
                  <React.Fragment>
                    {"また、そのあくらく追求に情熱を傾ける方々が存在します。それを一般的に食中と呼びます。とレストランではその世の中には様々なウイングなものを飽きてしまわれた方々が、素質の方々にふさわしい食材を提供しております。"}
                  </React.Fragment>
                </Box>
              }
            />
          </ListItem>

          <ListItem alignItems="flex-start">
            <ListItemText
              sx={{ textAlign: "right" }}
              primary={
                <Box sx={{ fontSize: "14px" }}>
                  <React.Fragment>{"德川"}
                  </React.Fragment>
                </Box>
              }
              secondary={
                <Box sx={{ fontSize: "16px" }}>
                  <React.Fragment>
                    {"もう待ちきれないよ！早く出してくれ！"}
                  </React.Fragment>
                </Box>
              }
            />
            <span style={{ width: 16 }}></span>
            <ListItemAvatar>
              <Avatar alt="德川" src="/static/images/avatar/3.jpg" />
            </ListItemAvatar>
          </ListItem>

          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="我修院" src="/static/images/avatar/3.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary={
                <Box sx={{ fontSize: "14px" }}>
                  <React.Fragment>{"我修院"}
                  </React.Fragment>
                </Box>
              }
              secondary={
                <Box sx={{ fontSize: "16px" }}>
                  <React.Fragment>
                    {"非常に新鮮で、非常に美味しい"}
                  </React.Fragment>
                </Box>
              }
            />
          </ListItem>

          <Divider variant="middle" component="li">2019/8/10 11:48:10</Divider>

          <ListItem alignItems="flex-start">
            <ListItemText
              sx={{ textAlign: "right" }}
              primary={
                <Box sx={{ fontSize: "14px" }}>
                  <React.Fragment>{"德川"}
                  </React.Fragment>
                </Box>
              }
              secondary={
                <Box sx={{ fontSize: "16px" }}>
                  <React.Fragment>
                    {"うんっ"}
                  </React.Fragment>
                </Box>
              }
            />
            <span style={{ width: 16 }}></span>
            <ListItemAvatar>
              <Avatar alt="德川" src="/static/images/avatar/3.jpg" />
            </ListItemAvatar>
          </ListItem>

          <ListItem alignItems="flex-start">
            <ListItemText
              sx={{ textAlign: "right" }}
              primary={
                <Box sx={{ fontSize: "14px" }}>
                  <React.Fragment>{"德川"}
                  </React.Fragment>
                </Box>
              }
              secondary={
                <Box sx={{ fontSize: "16px" }}>
                  <React.Fragment>
                    {"まぁっ"}
                  </React.Fragment>
                </Box>
              }
            />
            <span style={{ width: 16 }}></span>
            <ListItemAvatar>
              <Avatar alt="德川" src="/static/images/avatar/3.jpg" />
            </ListItemAvatar>
          </ListItem>

          <ListItem alignItems="flex-start">
            <ListItemText
              sx={{ textAlign: "right" }}
              primary={
                <Box sx={{ fontSize: "14px" }}>
                  <React.Fragment>{"德川"}
                  </React.Fragment>
                </Box>
              }
              secondary={
                <Box sx={{ fontSize: "16px" }}>
                  <React.Fragment>
                    {"あっ"}
                  </React.Fragment>
                </Box>
              }
            />
            <span style={{ width: 16 }}></span>
            <ListItemAvatar>
              <Avatar alt="德川" src="/static/images/avatar/3.jpg" />
            </ListItemAvatar>
          </ListItem>

          <ListItem alignItems="flex-start">
            <ListItemText
              sx={{ textAlign: "right" }}
              primary={
                <Box sx={{ fontSize: "14px" }}>
                  <React.Fragment>{"德川"}
                  </React.Fragment>
                </Box>
              }
              secondary={
                <Box sx={{ fontSize: "16px" }}>
                  <React.Fragment>
                    {"嫌だもう嫌だ"}
                  </React.Fragment>
                </Box>
              }
            />
            <span style={{ width: 16 }}></span>
            <ListItemAvatar>
              <Avatar alt="德川" src="/static/images/avatar/3.jpg" />
            </ListItemAvatar>
          </ListItem>

          <ListItem alignItems="flex-start">
            <ListItemText
              sx={{ textAlign: "right" }}
              primary={
                <Box sx={{ fontSize: "14px" }}>
                  <React.Fragment>{"德川"}
                  </React.Fragment>
                </Box>
              }
              secondary={
                <Box sx={{ fontSize: "16px" }}>
                  <React.Fragment>
                    {"無理もう無理"}
                  </React.Fragment>
                </Box>
              }
            />
            <span style={{ width: 16 }}></span>
            <ListItemAvatar>
              <Avatar alt="德川" src="/static/images/avatar/3.jpg" />
            </ListItemAvatar>
          </ListItem>

          <div style={{ height: "150px" }}></div>

        </List>

        <div className='textfield' align="right">
          <TextField
            autoFocus
            fullWidth
            id="text-to-sent"
            minRows={5}
            maxRows={5}
            multiline
          />
          <Button variant='' size='small'>发送</Button>
        </div>

      </header >



    </div >

  );
}

export default App;
