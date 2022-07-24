function send(url, data) {
  const encryptedData = encrypt(data);
  console.log(`sending ${encryptedData} to ${url}`);
}

function encrypt(data) {
  return 'encrypted data';
}

module.exports = {
  send: send,
};
