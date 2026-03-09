// lab 1
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

// lab 3
export function memoize(fn, maxCacheSize = Infinity) {
    const cache = new Map();

    return function (...args) {
        const key = JSON.stringify(args);
        if (cache.has(key)) {
            const value = cache.get(key);
            cache.delete(key);
            cache.set(key, value);
            return value;
        }
        
        const result = fn(...args);
        cache.set(key, result);

        if (cache.size > maxCacheSize) {
            const oldestKey = cache.keys().next().value;
            cache.delete(oldestKey);
        }

        return result;
    };
}