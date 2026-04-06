export class BiDirectionalPriorityQueue {
    constructor() {
        this.items = [];
    }

    enqueue(item, priority) {
        this.items.push({ item, priority, timestamp: Date.now() });
    }

    dequeueHighest() {
        if (this.items.length === 0) return null;
        this.items.sort((a, b) => b.priority - a.priority);
        return this.items.shift().item;
    }

    dequeueOldest() {
        if (this.items.length === 0) return null;
        this.items.sort((a, b) => a.timestamp - b.timestamp);
        return this.items.shift().item;
    }
}