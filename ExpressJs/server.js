const express = require('express');
const messagesController = require('./controllers/messages.controller');
const friendsController = require('./controllers/friends.controller');

const app = express(); // create server
const PORT = 3001;

app.use((req, res, next) => {
  const start = Date.now();
  next(); //passes the action the right route handler
  //after action execute response return the middle ware
  const delta = Date.now() - start;
  console.log(`${req.method} - ${req.url} ${delta}ms`);
});

app.use(express.json()); // apply the json parser middleware

// app.get('/friends', (req, res) => {
//   res.json(friends);
// });

app.get('/friends', friendsController.getFriends);

// app.post('/friends', (req, res) => {
//   if (!req.body.name) {
//     res.status(400).json({ error: 'missing friend name' });
//   }
//   const newFriend = {
//     //request.body doesnt exist unless we parse json
//     name: req.body.name,
//     id: friends.length,
//   };
//   friends.push(newFriend);
//   res.json(newFriend);
// });

app.post('/friends', friendsController.postFriend);

// app.get('/friends:friendId', (req, res) => {
//   const friendId = Number(req.params.friendId);
//   const friend = friends[friendId];
//   if (friend) {
//     res.status(200).json(friends);
//   } else {
//     res.status(404).json({ error: 'friend does not exist' });
//   }
// });

app.get('/friends:friendId', friendsController.getFriend);

// app.get('/messages', (req, res) => {
//   res.send('first message');
// });

app.get('/messages', messagesController.getMessages);

// app.post('/messages', (req, res) => {
//   console.log('opdating messages');
// });

app.post('/messages', messagesController.postMessages);

app.listen(PORT, () => {
  console.log('server is on');
});
