const path = require('path'); //we require path cause evey operation system have different format for directory
//for example in windows \foler\... in ununtu /folder/...

// using function over arrow function is better here.
// beacause if there is an error on function node will additional message to
// function location caused error. But if we use arrow function here we will not see the location of error with function name
function getMessages(req, res) {
  res.send('<ul><li> Hello world</li></ul>');
}

function getFile(req, res) {
  res.sendFile(path.join(__dirname, '..', 'public', 'testimage.png'));
}

function postMessages(req, res) {
  console.log('updating messages');
}

module.exports = {
  getMessages,
  postMessages,
};
