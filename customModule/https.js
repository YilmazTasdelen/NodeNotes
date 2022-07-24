const { request } = require('./request');
const { response } = require('./response');
const { REQUEST_TIMEOUT } = require('./request');
// if we require same module 2 time instead of one for all
// dependencies. İts still works perfecly.
// this caused by node js cache ıf reqired modules
// which is basically a little database of the modules that
// node checks to see if a module like request was previously loaded
// it provide us to save memory and run only once reqired functions
// THIS CACHE İS GLOBAL AND LİVES UNDER REQUİRE.CACHE
//to see it console.log(require.cache)
// we cant edit or overwrite requre modules expoted methods from modules !!!

function makeRequest(url, data) {
  request.send(url, data);
  return response.read();
}

const responsData = makeRequest('http://www.google.com', 'hello world');
console.log(responsData);
