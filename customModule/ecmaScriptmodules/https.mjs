import { send } from './request';
import { read } from './response';

function makeRequest(url, data) {
  send(url, data);
  return read();
}

const responsData = makeRequest('http://www.google.com', 'hello world');
console.log(responsData);
