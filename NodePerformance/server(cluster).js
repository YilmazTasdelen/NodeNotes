const express = require('express');
const cluster = require('cluster');
const os = require('os');

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
    const NUM_WORKERS = os.cpus().length;
    for (let i = 0; i < NUM_WORKERS; i++) {
        // we have 8 cors in local machines so we can handle 8 blocking delay function request same time.
        cluster.fork();
    }

    // cluster.fork(); // it uses cpu cors
    // cluster.fork();
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

/***
 * for pm2 load balance 
 * pm2 list, status, ls commands
 * pm2 start
 * pm2 stop {process name as id like 0 } or 
 * pm2 stop server
 * pm2 delete server
 * 
 */