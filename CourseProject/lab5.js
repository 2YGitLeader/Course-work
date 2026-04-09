export async function asyncMapPromise(array, asyncCallback, signal) {
    const results = [];