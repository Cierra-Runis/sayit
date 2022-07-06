import './App.css';

import * as React from 'react';
import { List, Button, TextField, Divider } from '@mui/material/';
import SendIcon from '@mui/icons-material/Send';
import Navbar from './Navbar';
import Dialog from './Dialog';

const username = false ? "德川" : undefined

function App() {
  return (

    <div className="App">

      <Navbar username={username} />

      <header className="Dialogs">

        <div style={{ height: "70px" }}></div>
        <List sx={{ width: '100%', maxWidth: '97vw' }}>

          <Divider variant="middle" component="li">2019/8/10 11:45:14</Divider>

          <Dialog username="淳平" sentence="人間の三大欲求は、食欲、性欲、睡眠欲。その中でも食欲は人によって生命維持のために必要報道であり、動物系においては快感を本当らしい。優先して行動するようプログラムされております。" isMe={false} />

          <Dialog username="淳平" sentence="食事を取ることにより、満足感、また、美味しいものを食べることにより、喜びは精神上好ましい影響を与えます。" isMe={false}></Dialog>

          <Dialog username="淳平" sentence="また、そのあくらく追求に情熱を傾ける方々が存在します。それを一般的に食中と呼びます。とレストランではその世の中には様々なウイングなものを飽きてしまわれた方々が、素質の方々にふさわしい食材を提供しております。" isMe={false}></Dialog>

          <Dialog username="德川" sentence="もう待ちきれないよ！早く出してくれ！" isMe={true}></Dialog>

          <Dialog username="我修院" sentence="非常に新鮮で、非常に美味しい" isMe={false}></Dialog>

          <Divider variant="middle" component="li">2019/8/10 11:48:10</Divider>

          <Dialog username="德川" sentence="うんっ" isMe={true}></Dialog>

          <Dialog username="德川" sentence="まぁっ" isMe={true}></Dialog>

          <Dialog username="德川" sentence="あっ" isMe={true}></Dialog>

          <Dialog username="德川" sentence="嫌だもう嫌だ" isMe={true}></Dialog>

          <Dialog username="德川" sentence="無理もう無理" isMe={true}></Dialog>

        </List>
        <div style={{ height: "150px" }}></div>

      </header >

      <div className='textfield' align="right">
        <TextField
          autoFocus
          fullWidth
          id="text-to-sent"
          minRows={5}
          maxRows={5}
          multiline
        />
        <Button size='small' endIcon={<SendIcon />}>发送</Button>
      </div>


    </div >

  );
}

export default App;
