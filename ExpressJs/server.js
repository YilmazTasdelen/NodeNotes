const express = require('express');
const path = require('path');

const app = express(); // create server
const PORT = 3001;

const friendsRouter = require('./routes/friends.router');
const messagesRouter = require('./routes/messages.router');
// const friendsRouter = express.Router();
//const messagesRouter = express.Router();

app.use((req, res, next) => {
  const start = Date.now();
  next(); //passes the action the right route handler
  //after action execute response return the middle ware
  const delta = Date.now() - start;
  console.log(`${req.method} -${req.baseUrl}- ${req.url} ${delta}ms`);
});

app.use(express.json()); // apply the json parser middleware

// app.get('/friends', (req, res) => {
//   res.json(friends);
// });

//friendsRouter.get('/', friendsController.getFriends);

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

//friendsRouter.post('/', friendsController.postFriend);

// app.get('/friends:friendId', (req, res) => {
//   const friendId = Number(req.params.friendId);
//   const friend = friends[friendId];
//   if (friend) {
//     res.status(200).json(friends);
//   } else {
//     res.status(404).json({ error: 'friend does not exist' });
//   }
// });

//friendsRouter.get('/:friendId', friendsController.getFriend);

// app.get('/messages', (req, res) => {
//   res.send('first message');
// });

//messagesRouter.get('/messages', messagesController.getMessages);

// app.post('/messages', (req, res) => {
//   console.log('opdating messages');
// });

//messagesRouter.post('/messages', messagesController.postMessages);

// app.use(messagesRouter);
app.use('/friends', friendsRouter);
app.use(messagesRouter);

// for serving static files
//app.use('site', express.static('public'));
app.use('site', express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
  console.log('server is on');
});
