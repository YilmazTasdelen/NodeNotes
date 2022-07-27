const http = require('http');

const app = require('./app');

const PORT = process.env.PORT || 8000;
console.log(PORT);

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
