
  var socket = io();

  socket.on('connect', function(){
    console.log('connected to server.');


    // socket.emit('createMessage', {
    //   from:'mayank@example.com',
    //   text:'hi.'
    // });

  });

  socket.on('disconnect', function(){
    console.log('Disconnected from server.');
  });


      socket.on('newMessage', (message) => {
        console.log('new Message for',message);
      });
