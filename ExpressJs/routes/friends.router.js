const express = require('express');

const friendsController = require('./controllers/friends.controller');
const friendsRouter = express.Router();

friendsRouter.use((res, req, next) => {
  console.log('ip adress : ', req.ip);
  next();
});

friendsRouter.get('/:friendId', friendsController.getFriend);
friendsRouter.post('/', friendsController.postFriend);
friendsRouter.get('/', friendsController.getFriends);

module.exports = friendsRouter;
