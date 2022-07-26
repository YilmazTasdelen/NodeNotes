// using function over arrow function is better here.
// beacause if there is an error on function node will additional message to
// function location caused error. But if we use arrow function here we will not see the location of error with function name
function getMessages(req, res) {
  res.send('<ul><li> Hello world</li></ul>');
}

function postMessages(req, res) {
  console.log('updating messages');
}

module.exports = {
  getMessages,
  postMessages,
};
