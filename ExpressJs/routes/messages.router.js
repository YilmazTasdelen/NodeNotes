const express = require('express');

const messagesRouter = express.Router();
const messagesController = require('./controllers/messages.controller');

messagesRouter.get('/messages', messagesController.getMessages);
messagesRouter.post('/messages', messagesController.postMessages);
messagesRouter.get('/messages/file', messagesController.getFile);
messagesRouter.get('/messages/templateSite', messagesController.serveOtherPage);

module.exports = messagesRouter;
