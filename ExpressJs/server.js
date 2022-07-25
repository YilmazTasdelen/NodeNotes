const express = require('express');

const app = express(); // create server
const PORT = 3001;

app.get('/', (req, res) => {
  res.send('hello world');
});

app.get('/messages', (req, res) => {
  res.send('first message');
});

app.post('/messages', (req, res) => {
  console.log('opdating messages');
});

app.listen(PORT, () => {
  console.log('server is on');
});
