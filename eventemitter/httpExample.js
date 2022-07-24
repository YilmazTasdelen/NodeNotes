//const http = require('https'); // deconstruct it its better
//const { request } = require('https');
const { get } = require('https');
//const req = http.request('https://www.google.com', (res) => {

//const req =
get('https://www.google.com', (res) => {
  res.on('data', (chunk) => {
    // it actually event emmitr. when data
    // the event we going to be responding is data
    console.log(`Data chunk ${chunk}`);
  });
  res.on('end', () => {
    // its also event. it mean no more data
    console.log('no more data');
  });
});
//req.end(); // trigger to request to be send
