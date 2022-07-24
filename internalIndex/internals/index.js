// this foler for collect and share all ecports easly
const request = require('./request');
const response = require('./response');

module.exports = {
  REQUEST_TIMEOUT: request.REQUEST_TIMEOUT,
  send: request.send,
  response: response.read,
};

// module.exports = {
//   request: require('./request'),
//   response: require('./response'),
// };
