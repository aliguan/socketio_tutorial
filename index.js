var app = require('express')();
var http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  socket.on('poop message', function(msg){
    io.emit('poop message', msg);
  });
});


http.listen(3000, function(){
  console.log('listening on *:3000');
});
