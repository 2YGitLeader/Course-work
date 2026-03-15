export function* fibonacciGenerator() {
    let [a, b] = [0, 1];
    while (true) {
        yield a;
        [a, b] = [b, a + b];
    }
}

export async function timeoutIterator(iterator, timeoutSeconds) {
    const startTime = Date.now();
    const timeoutMs = timeoutSeconds * 1000;
    
    for (const value of iterator) {
        if (Date.now() - startTime > timeoutMs) {
            console.log("Time is up");
            break;
        }
        console.log(`received: ${value}`);
        await new Promise(res => setTimeout(res, 100)); 
    }
}
