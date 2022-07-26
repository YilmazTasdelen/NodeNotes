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

app.use((req, res, next) => {
  const start = Date.now();
  next(); //passes the action the right route
  //after action execute response return the middle ware
  const delta = Date.now() - start;
  console.log(`${req.method} - ${req.url} ${delta}ms`);
});

app.use(express.json()); // apply the json parser middleware

app.get('/friends', (req, res) => {
  res.json(friends);
});

app.post('/friends', (req, res) => {
  if (!req.body.name) {
    res.status(400).json({ error: 'missing friend name' });
  }
  const newFriend = {
    //request.body doesnt exist unless we parse json
    name: req.body.name,
    id: friends.length,
  };
  friends.push(newFriend);
  res.json(newFriend);
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
