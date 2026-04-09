export async function asyncMapPromise(array, asyncCallback, signal) {
    const results = [];

    for (let i = 0; i < array.length; i++) {
        if (signal?.aborted) {
            throw new Error("The process has been cancelled");
        }