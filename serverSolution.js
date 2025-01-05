const http = require('http');

const server = http.createServer((req, res) => {
  // ... request handling logic ...
  res.end(); // Ensure the response is ended
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});

server.on('close', () => {
  console.log('Server closed');
});

process.on('SIGINT', () => {
  server.close(() => {
    console.log('Server closed gracefully');
    process.exit(0);
  });
});