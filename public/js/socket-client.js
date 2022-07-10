// References the HTML
const lblOnline = document.querySelector('#lblOnline');
const lblOffline = document.querySelector('#lblOffline');
const txtMessage = document.querySelector('#txtMessage');
const btnSend = document.querySelector('#btnSend');

/**
 ** This is the CLIENT SIDE of the socket.
*/
const socket = io();

// Listen for the event 'connect'
socket.on('connect', () => {
  lblOffline.style.display = 'none';
  lblOnline.style.display = '';
});

// Listen for the event 'disconnect'
socket.on('disconnect', () => {
  lblOnline.style.display = 'none';
  lblOffline.style.display = '';
});

// Listen to the server's 'server-message' event
socket.on('server-message', payload => {
  console.log(payload);
});

btnSend.addEventListener('click', () => {
  const message = txtMessage.value;
  const payload = {
    message,
    id: '123ABC',
    date: new Date().getTime(),
  };

  // Emit to the server's client-message event
  socket.emit('client-message', payload, id => {
    console.log('From server:', id);
  });
});
