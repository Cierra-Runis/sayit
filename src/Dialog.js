import * as React from 'react';
import { ListItem, ListItemAvatar, Avatar, ListItemText, Box } from '@mui/material/';

function Dialog({ username, sentence, isMe }) {
  return (
    <ListItem alignItems="flex-start">
      {
        isMe ?
          <>
            <ListItemText
              sx={{ textAlign: "right" }}
              primary={
                <Box sx={{ fontSize: "14px" }}>
                  <React.Fragment>{username}
                  </React.Fragment>
                </Box>
              }
              secondary={
                <Box sx={{ fontSize: "16px" }}>
                  <React.Fragment>
                    {sentence}
                  </React.Fragment>
                </Box>
              }
            />
            <span style={{ width: 16 }}></span>
            <ListItemAvatar>
              <Avatar alt={username} src="/favicon.ico" />
            </ListItemAvatar>
          </> :
          <>
            <ListItemAvatar>
              <Avatar alt={username} src="/favicon.ico" />
            </ListItemAvatar>
            <ListItemText
              primary={
                <Box sx={{ fontSize: "14px" }}>
                  <React.Fragment>{username}
                  </React.Fragment>
                </Box>
              }
              secondary={
                <Box sx={{ fontSize: "16px" }}>
                  <React.Fragment>
                    {sentence}
                  </React.Fragment>
                </Box>
              }
            />
          </>
      }
    </ListItem >
  );
}

export default Dialog;
