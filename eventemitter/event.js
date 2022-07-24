const EventEmitter = require('events');
const celeb = new EventEmitter();

//subscribe to celeb gor observer 1
celeb.on('race', function (result) {
  if (result === 'win') console.log('triggired 1');
});

//subscribe to celeb gor observer 1
celeb.on('race', function (result) {
  if (result === 'lost') console.log('triggired 2');
});
process.on('exit', (code) => {
  console.log('Program exit event with code: ', code);
});

celeb.emit('race', 'win');
celeb.emit('race', 'lost');
