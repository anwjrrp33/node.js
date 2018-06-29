var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
    res.sendFile(__dirname+"/chat.html");
});

var lobby = new ChatRoom("LOBBY");

io.on('connection', function(socket){
    console.log('a user connected');

    lobby.clients.push(socket);
    socket.room = lobby;

    socket.on('disconnect', function(){
        console.log('user disconnected');
    });

    socket.on("jr1", function() {
        console.log("jr1....received");
        socket.emit("sjr1", {sender: "SERVER", msg: "Welcome"});
    });

    socket.on("userMsg", function(msg) {
        console.log(msg.content);

        socket.room.sendMsg(msg);
    });
});

function ChatRoom(name){
    this.name = name;
    this.clients = [];
}

ChatRoom.prototype.show = function() {
    return this.name;
}

ChatRoom.prototype.sendMsg = function(msg){
    var len = this.clients.length

    for(var i = 0; i< len; i++){
        this.clients[i].emit("serverMsg", msg);
    }
}

http.listen(3000, function(){
    console.log('listening on *:3000');
});
