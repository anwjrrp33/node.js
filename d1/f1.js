var fs = require("fs");

fs.readFile("C:\\zzz\\sample.txt", function (error, data) {

    console.log(data);

    var content = data.toString();

    console.log(content)
})