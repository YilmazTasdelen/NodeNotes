const express = require('express');

const messagesRouter = express.Router();
const messagesController = require('./controllers/messages.controller');

messagesRouter.get('/messages', messagesController.getMessages);
messagesRouter.post('/messages', messagesController.postMessages);

module.exports = messagesRouter;
