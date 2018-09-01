module.exports = function(app, io){
  console.log("Server socket Initialised");

  //respond to connection request
  io.on('connection',(socket) => {
    console.log('user connection');
    //respond to disconnect request
    socket.on('disconnect',function(){
      console.log('user disconnection');
    });
    //respond to getting a new message
    socket.on('add-message',(message) => {
      //Broadcast the message to all other users that are subscribed to this socket.
      io.emit('message',{type: 'message', text:message});
    });
  });
};
