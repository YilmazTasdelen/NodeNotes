const request = require('./request');
function request(url, data) {
  send(url, data);
  return read();
}
