import { EventEmitter } from 'events';

export const eventBus = new EventEmitter();

export class Entity {
    constructor(name) {
        this.name = name;
        this.handler = (msg) => console.log(`${this.name} received: ${msg}`);
    }

    subscribe(event) {
        eventBus.on(event, this.handler);
    }
    
    unsubscribe(event) {
        eventBus.off(event, this.handler);
    }
}