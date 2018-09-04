
  var socket = io();
  var user = 'Mayank';

  socket.on('connect', function(){
    console.log('connected to server.');
  });

  socket.on('disconnect', function(){
    console.log('Disconnected from server.');
  });


  socket.on('newMessage', (message) => {
      console.log('new Message',message);
    });

  socket.on('welcome', (message) => {
        console.log(message);
    });
