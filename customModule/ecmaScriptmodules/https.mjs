import { send } from './request.mjs';
import { read } from './response.mjs';

function makeRequest(url, data) {
  send(url, data);
  return read();
}

const responsData = makeRequest('http://www.google.com', 'hello world');
console.log(responsData);
