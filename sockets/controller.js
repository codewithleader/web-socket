/**
 ** This is the SERVER SIDE of the socket.
 */
const socketController = socket => {
  console.log('Client connected', socket.id);

  socket.on('disconnect', () => {
    console.log('Client disconnected', socket.id);
  });

  // Listen to the client's event with .on
  socket.on('client-message', (payload, callback) => {
    const resp = {
      status: 'ok',
      message: `This is the Response from Server of the Request from Client with ID: ${socket.id}`,
    };
    callback(resp);

    // Emit to all clients with broadcast.emit
    socket.broadcast.emit('server-message', payload);
  });
};

module.exports = {
  socketController,
};
