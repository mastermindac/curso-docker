const http = require('http');

const hostname = '0.0.0.0';
const port = 3000;

const server = http.createServer((req, res) => {
  console.log("Request from", req.socket.remoteAddress);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
}); 

process.on("SIGTERM", () => {
  console.log("Received SIGTERM");
  process.exit(0);
});

server.listen(port, hostname, () => {
  console.log(process.argv);
  console.log(`Server running at http://${hostname}:${port}/`);
});
