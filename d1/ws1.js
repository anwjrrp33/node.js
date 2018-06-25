var express = require('express')
var ws = require('./wschat')
var app = express()
app.get('/', function (req, res) {
    res.sendfile(__dirname + '/ws.html');
})
app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})