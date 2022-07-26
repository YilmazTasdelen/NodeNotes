const express = require('express');

const app = express(); // create server
const PORT = 3001;

const friends = [
  {
    id: 1,
    name: 'test',
  },
  {
    id: 2,
    name: 'test2',
  },
];

app.get('/friends', (req, res) => {
  res.json(friends);
});

app.get('/friends:friendId', (req, res) => {
  const friendId = Number(req.params.friendId);
  const friend = friends[friendId];
  if (friend) {
    res.status(200).json(friends);
  } else {
    res.status(404).json({ error: 'friend does not exist' });
  }
});

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
