const path = require('path');
const http = require('http');
const publicPath = path.join(__dirname, '../public');
const express = require('express');
const socketIO = require('socket.io');

const port = process.env.PORT || 3000

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New user connected');

  socket.emit('newMessage', {
    from:'mayank@example.com',
    text:'hi, how are you?',
    createdAt: 123
  });

  socket.on('createEmail', (newEmail) => {
    console.log('Email Created.', newEmail);
  });

  socket.on('createMessage', (message) => {
    console.log('new Message from user.', message);
  });

  socket.on('disconnect', () => {
    console.log('User was dissconnected.');
  });
});


server.listen(port, () => {

  console.log(`Server up on port ${port}.`);

});
