# socketController
## This is the controller for the SERVER SIDE of the socket.
- When a client connects with "io()", listen for the client-message event, and when it's received, send a server-message event to the client or to all clients

- Listen to the client's event with "on()"

Example:
```
socket.on('client-event-name', (payload, callback) => {
    console.log(payload);
    const response = "Greetings from de Server";
    callback(response);
    };
```

- Emit server's event to all clients with "broadcast.emit()"

Example:
```
socket.broadcast.emit('server-event-name', payload);
```
### INFO:
Please note that broadcasting is a server-only feature.