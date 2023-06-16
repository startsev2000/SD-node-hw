const WebSocket = require('ws');

const ws = new WebSocket('ws://localhost:8080');

ws.on('open', function open() {
    ws.send('Hello Server!');
});

ws.on('message', function incoming(data) {
    let num = parseInt(data.toString());
    let char = String.fromCharCode(num);
    console.log(char);
});
