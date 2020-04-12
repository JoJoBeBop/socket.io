'use strict';

const socket = io();
/*
document.querySelector('.chatID').addEventListener('submit', (event) => {
  event.preventDefault();
  const inp = document.getElementById('m');
  socket.emit('chat message', inp.value);
  inp.value = '';
});*/


document.querySelector('.userfield').addEventListener('submit', (event) => {
  event.preventDefault();
  const nameInput = document.getElementById('user');
  const messageInput = document.getElementById('m');

  let newName;
  if (nameInput.value) {
    newName =  nameInput.value;
  }

  let messageAndUser = [];

  messageAndUser.push(newName + ": " + messageInput.value);

  socket.emit('chat message', messageAndUser);
  console.log(messageAndUser);
  inp.value = '';
});

socket.on('chat message', (msg) => {
  const item = document.createElement('li');
  item.innerHTML =msg;
  document.getElementById('messages').appendChild(item);
});
