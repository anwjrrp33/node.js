var fs = require("fs");
var NodeID3 = require('node-id3');

var path = "C:\\Users\\Public\\Music\\Sample Music\\Kalimba.mp3";

var tags = NodeID3.read(path);

console.log(tags);

var imageData = tags.image.imageBuffer;

console.log(imageData);

fs.writeFile("C:\\zzz\\soju.jpg", imageData, function (err) {

});