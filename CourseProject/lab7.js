import { EventEmitter } from 'events';

export const eventBus = new EventEmitter();

export class Entity {
    constructor(name) {
        this.name = name;
        this.handler = (msg) => console.log(`${this.name} отримав: ${msg}`);
    }