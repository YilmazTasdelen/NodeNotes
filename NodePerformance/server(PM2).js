const express = require('express');
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
/***
 * after a code change on server restarting live server causes the error
 * on frontend which using our end points
 * in pm2 for zero downtime restart use
 * pm2 reload server instead of restart
 * pm2 update procesees one by one so user wont be interupted.
 *
 * for live monitoring
 * pm2 monit
 *
 * to stop process by id
 * pm2 stop 2 {2 =>id}
 *
 * start spesific process
 * pm2 start 2
 *
 * to start pm2 workers
 * pm2 start server.js -i(instance) max or 3(number)
 * pm2 start server.js -i max
 * pm2 start server.js -i 3
 *
 * for logs pm2 logs
 *  pm2 logs --lines 200 (last 200 logs)
 * the out put should be like this
 * ────┬────────────────────┬──────────┬──────┬───────────┬──────────┬──────────┐
│ id │ name               │ mode     │ ↺    │ status    │ cpu      │ memory   │
├────┼────────────────────┼──────────┼──────┼───────────┼──────────┼──────────┤
│ 0  │ server             │ cluster  │ 0    │ online    │ 0%       │ 38.7mb   │
│ 1  │ server             │ cluster  │ 0    │ online    │ 0%       │ 38.7mb   │
│ 2  │ server             │ cluster  │ 0    │ online    │ 0%       │ 39.0mb   │
│ 3  │ server             │ cluster  │ 0    │ online    │ 0%       │ 38.5mb   │
│ 4  │ server             │ cluster  │ 0    │ online    │ 0%       │ 38.5mb   │
│ 5  │ server             │ cluster  │ 0    │ online    │ 0%       │ 38.6mb   │
│ 6  │ server             │ cluster  │ 0    │ online    │ 0%       │ 39.0mb   │
│ 7  │ server             │ cluster  │ 0    │ online    │ 0%       │ 38.8mb   │
│ 8  │ server             │ cluster  │ 0    │ online    │ 0%       │ 38.8mb   │
│ 9  │ server             │ cluster  │ 0    │ online    │ 0%       │ 38.6mb   │
│ 10 │ server             │ cluster  │ 0    │ online    │ 0%       │ 38.7mb   │
│ 11 │ server             │ cluster  │ 0    │ online    │ 0%       │ 38.6mb   │
│ 12 │ server             │ cluster  │ 0    │ online    │ 0%       │ 38.4mb   │
│ 13 │ server             │ cluster  │ 0    │ online    │ 0%       │ 39.1mb   │
│ 14 │ server             │ cluster  │ 0    │ online    │ 0%       │ 38.6mb   │
│ 15 │ server             │ cluster  │ 0    │ online    │ 0%       │ 38.8mb   │
└────┴────────────────────┴──────────┴──────┴───────────┴──────────┴──────────┘
pm2 delete server.js
[PM2] Applying action deleteProcessId on app [server.js](ids: [
   0,  1,  2,  3,  4,  5,
   6,  7,  8,  9, 10, 11,
  12, 13, 14, 15
])
[PM2] [server](0) ✓
[PM2] [server](1) ✓
[PM2] [server](3) ✓
[PM2] [server](2) ✓
[PM2] [server](4) ✓
[PM2] [server](5) ✓
[PM2] [server](6) ✓
[PM2] [server](7) ✓
[PM2] [server](8) ✓
[PM2] [server](9) ✓
[PM2] [server](10) ✓
[PM2] [server](11) ✓
[PM2] [server](12) ✓
[PM2] [server](13) ✓
[PM2] [server](14) ✓
[PM2] [server](15) ✓
┌────┬────────────────────┬──────────┬──────┬───────────┬──────────┬──────────┐
│ id │ name               │ mode     │ ↺    │ status    │ cpu      │ memory   │

for spesify logs file
pm2 start server.js -l logs.txt -i max



*/
/** we dont need worker process any more because we have pm2 for manage workers now */
// if (cluster.isMaster) {
//     console.log('Master process started.');
//     const NUM_WORKERS = os.cpus().length;
//     for (let i = 0; i < NUM_WORKERS; i++) {
//         // we have 8 cors in local machines so we can handle 8 blocking delay function request same time.
//         cluster.fork();
//     }


// } else {
//     console.log('worker process started');
//     app.listen(5001);
// }



/***
 * for pm2 load balance 
 * pm2 list, status, ls commands
 * pm2 start
 * pm2 stop {process name as id like 0 } or 
 * pm2 stop server
 * pm2 delete server
 * 
 */