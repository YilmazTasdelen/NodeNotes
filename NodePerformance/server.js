const express = require('express');
const cluster = require('cluster');

const app = express();

function delay(duration) {
    const startTime = Date.now();
    while (Date.now() - startTime < duration) {
        // this jucst loop so its not gonna send to threadt pool or O.S.
        // the event loop is completely blocked.

    }
}

app.get('/', (req, res) => {
    // when ı make rrequest '/test' and '/'  same time 
    // / timer will respons at least 9.20 ms and '/'  request will wait untill 
    // '/timer' request finish 
    res.send(`performance example ${process.pid}`);
});


app.get('/timer', (req, res) => {
    delay(9000); // this will block event loop for 9 seconds.
    res.send(`Test with delay ${process.pid}`);
});

console.log('Running server.js.');
if (cluster.isMaster) {
    console.log('Master process started.');
    cluster.fork(); // it uses cpu cors
    cluster.fork();
} else {
    console.log('worker process started');
    app.listen(5001);
}

/**Remember that when we test response times in browsers like chrome
 * brows detects if exacxt same request sends two time from different tabs
 * it will wait first one to response so it will use for both requests response
   to escape from this just disable cache from network tab.
*/

// when we run the server the output will like
/**
 Running server.js.
Master process started.
Running server.js.
worker process started
Running server.js.
worker process started
 * 
 */