'use strict';

const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(express.static('public'));

io.on('connection', (socket) => {


  console.log('a user connected', socket.id );

  socket.on('disconnect', () => {
    console.log('a user disconnected', socket.id);
  });

  socket.on('user created', (usr) => {
    console.log('user: ', usr);
    io.emit('user created', usr);
  });

  socket.on('chat message', (msg) => {
    console.log('message: ', msg);
    io.emit('chat message', msg);
  });

  /*https://socket.io/docs/rooms-and-namespaces/*/
  socket.on("connection", (room) => {
    socket.leaveAll();
    socket.join(room);
  });

});

http.listen(3000, () => {
  console.log('listening on port 3000');
});
