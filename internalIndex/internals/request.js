const REQUEST_TIMEOUT = 500;

function send(url, data) {
  const encryptedData = encrypt(data);
  console.log(`sending ${encryptedData} to ${url}`);
}

function encrypt(data) {
  return 'encrypted data';
}

module.exports = {
  send: send,
  REQUEST_TIMEOUT,
};
