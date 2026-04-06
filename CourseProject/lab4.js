export class BiDirectionalPriorityQueue {
    constructor() {
        this.items = [];
    }
    
    enqueue(item, priority) {
        this.items.push({ item, priority, timestamp: Date.now() });
    }