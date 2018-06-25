var WebSocketServer = require('ws').Server,
    wss = new WebSocketServer({port: 9999})

wss.on('connection', function (ws) {
    ws.on('message', function (message) {
        console.log(message);

        wss.clients.forEach(function each(client) {
            client.send(message);
        });
    });

});