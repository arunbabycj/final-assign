module.exports = function(app, io, fs){
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

        socket.on('join', function(data){
      //joining
            socket.join(data.room);
            console.log(data.user + 'joined the room : ' + data.room);
            socket.broadcast.to(data.room).emit('new user joined', {user:data.user, message:'has joined this room.'});
          //  io.in(data.room).emit('new user joined', {user:data.user, message:'has joined this room.'});
          // socket.on('join', (req, res) => {
          //   console.log('hello');
          // var isUser = 0;
          // var userObj;
          // //localhost:3000/api/reg?username=abcdefg
          // var uname = data.user;
          // console.log(uname);
          //
          // fs.readFile('authdata.json','utf-8', function(err, data){
          //     if (err){
          //         console.log(err);
          //     } else {
          //     userObj = JSON.parse(data);
          //     for (let i=0;i<userObj.length;i++){
          //       if (userObj[i].name == uname){
          //         //Check for duplicates
          //         isUser = 1;
          //       }
          //     }
          //     if (isUser > 0){
          //       //Name already exists in the file
          //        res.send({'username':'','success':false});
          //      }else{
          //        //Add name to list of names
          //        userObj.push({'name':uname})
          //        //Prepare data for writing (convert to a string)
          //        var newdata = JSON.stringify(userObj);
          //        fs.writeFile('authdata.json',newdata,'utf-8',function(err){
          //          if (err) throw err;
          //          //Send response that registration was successfull.
          //          res.send({'username':uname,'success':true});
          //         });
          //      }
          //    }
          // })
          // })
        });

        socket.on('leave', function(data){
            console.log(data.user + 'left the room : ' + data.room);
            socket.broadcast.to(data.room).emit('left room', {user:data.user, message:'has left this room.'});
          //  io.in(data.room).emit('left room', {user:data.user, message:'has left this room.'});
            socket.leave(data.room);
        });

        socket.on('message',function(data){
            io.in(data.room).emit('new message', {user:data.user, message:data.message});
        })
    });
};
