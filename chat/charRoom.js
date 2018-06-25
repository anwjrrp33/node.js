// 생성자 함수
function ChatRoom(name){
    this.name = name;
}

ChatRoom.prototype.show = function() {
    return this.name;
}

var r1 = new ChatRoom("LOBBY");
var r2 = new ChatRoom("MyRoom");

console.log(r1.show());
console.log(r2.show());