'use strict';

const socket = io();

document.querySelector('.chatID').addEventListener('submit', (event) => {
  event.preventDefault();
  const inp = document.getElementById('m');
  socket.emit('chat message', inp.value);
  inp.value = '';
});

document.querySelector('.userfield').addEventListener('submit', (event) => {
  event.preventDefault();
  const inp = document.getElementById('user');
  socket.emit('user created', inp.value);
  inp.value = '';
});

socket.on('chat message', (msg, usr) => {
  const item = document.createElement('li');
  item.innerHTML =  usr + ": " + msg;
  document.getElementById('messages').appendChild(item);
});
