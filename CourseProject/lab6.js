export async function processLargeDataStream(asyncIterable) {
    let processedCount = 0;
    for await (const chunk of asyncIterable) {
        processedCount++;
    }
    return processedCount;
}