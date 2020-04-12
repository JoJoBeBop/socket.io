'use strict';
const socket = io();
let usersRoom = "Party Room A";
socket.emit("connection", "Party Room A");

document.querySelectorAll("p").forEach(roomClass => {
  roomClass.addEventListener("click", (event) => {

    roomClass.classList.add("theRoom");
    socket.emit("joinRoom", roomClass.innerHTML);

    usersRoom = roomClass.innerHTML;
    document.querySelector("#messages").innerHTML = "";
  });
});

document.querySelector('.userfield').addEventListener('submit', (event) => {
  event.preventDefault();
  const nameInput = document.getElementById('user');
  const messageInput = document.getElementById('m');
  let newName =  nameInput.value;
  let messageAndUser = [];

  messageAndUser.push(usersRoom);
  messageAndUser.push(newName + ": " + messageInput.value);

  socket.emit('chat message', messageAndUser);
  console.log(messageAndUser);
  messageInput.value = '';
});

socket.on('chat message', (msg) => {
  const item = document.createElement('li');
  item.innerHTML = msg;
  document.getElementById('messages').appendChild(item);
});
