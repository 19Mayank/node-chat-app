
  var socket = io();

  socket.on('connect', function(){
    console.log('connected to server.');

    socket.on('newMessage', (message) => {
      console.log('new Message for user',message);
    });

    socket.emit('createMessage', {
      from:'mayank@example.com',
      text:'hi.'
    });

  });

  socket.on('disconnect', function(){
    console.log('Disconnected from server.');
  });

  socket.on('newEmail', function(email){
    console.log('newEmail');
      console.log(email);
  });
