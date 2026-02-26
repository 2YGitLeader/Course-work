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
}