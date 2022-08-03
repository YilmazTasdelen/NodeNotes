const {
    isMainThread,
    Worker,
    workerData,
} = require('worker_threads');


/**
 * worker threads are part of the same pprocess. 
 * for example in in cluster module if we create two fork 
 * it mean main process and 2 forked pocess we got 3 of them.
 * but in this worker thread example we have 2 worker thread and 
 * 1 process.
 * 
 * 
 * 
 */
if (isMainThread) {
    console.log(`Main Thread ! Process ID: ${process.pid}`);
    new Worker(__filename, {
        workerData: [7, 6, 2, 3]
    });
    new Worker(__filename, {
        workerData: [1, 6, 3, 5]
    });
} else {
    // process id will be the same for each worker thread
    console.log(`Worker! Process ID: ${process.pid}`);
    /**sort function is blocking thats what we test here  */
    console.log(`${workerData} sorted is ${workerData.sort()}`);
}