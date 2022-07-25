const express = require('express');

const app = express(); // create server
const PORT = 3001;

app.listen(PORT, () => {
  console.log('server is on');
});
