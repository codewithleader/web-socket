const socketController = socket => {
  console.log('Client connected', socket.id);

  socket.on('disconnect', () => {
    console.log('Client disconnected', socket.id);
  });

  // Listen to the client's event with .on
  socket.on('client-message', (payload, callback) => {
    const id = 123456789;
    callback(id);

    // Emit to all clients with broadcast.emit
    socket.broadcast.emit('server-message', payload);
  })
}

module.exports = {
  socketController
}