const net = require('net');

const server = net.createServer((socket) => {
  console.log(`Client connected: ${socket.remoteAddress}:${socket.remotePort}`);

  socket.on('data', (data) => {
    console.log(`Received data from client: ${data.toString()}`);
    socket.write(`You said: ${data.toString()}`);
  });

  socket.on('end', () => {
    console.log('Client disconnected');
  });

  socket.write('Welcome to the server!\n');
});

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
