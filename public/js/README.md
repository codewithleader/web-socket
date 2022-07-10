# This is the CLIENT SIDE of the socket.

- With "io()" it creates a new socket connection to the server.

Example:
```
const socket = io();
```

- To listen to an event we use "on()"

Example:
```
socket.on('server-event-name', () => {
  // Here the code
});
```

- To send an event to Server we use "emit()"
Example:
```
const payload = {
  message: 'this is a message from Client to Server',
  id: '123ABC',
  date: new Date().getTime(),
};

// Emit to the server's client event
socket.emit(
  'client-event-name',
  payload,
  (response) => {
    console.log('Response from server:', response); // This callback function is the Acknowledgment of receipt. It's wait the response of the server. (Optional)
});
```