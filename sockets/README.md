# socketController
## This is the controller for the SERVER SIDE of the socket.
- When a client connects, listen for the client-message event, and when it's received, send a server-message event to all clients


- Listen to the client's event with .on('eventClientName', (payload, callback))

Example:
```
socket.on('client-message', (payload, callback) => {
    const id = 123456789;
    callback(id);
    };
```


- Emit server's event to all clients with broadcast.emit('eventServerName', payload)

Example:
```
socket.broadcast.emit('server-message', payload);
```