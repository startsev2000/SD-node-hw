const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', ws => {
    ws.on('message', message => {
        console.log('received: %s', message);
        let counter = 0;

        const intervalId = setInterval(() => {
            if (counter < message.length) {
                ws.send(message[counter]);
                counter++;
            } else {
                clearInterval(intervalId);
            }
        }, 1000);
    });
});
