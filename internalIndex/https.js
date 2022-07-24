const internals = require('./internals');
// node js allows us to exports all the functions and variables
// from one folder by index.js and foler name

function makeRequest(url, data) {
  internals.request.send(url, data);
  return internals.response.read();
}

const responsData = makeRequest('http://www.google.com', 'hello world');
console.log(responsData);
