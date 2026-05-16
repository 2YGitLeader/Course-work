export class AuthProxy {
    constructor(apiToken) {
        this.apiToken = apiToken;
    }

    async fetch(url, options = {}) {
        const modifiedOptions = {
            ...options,
            headers: {
                ...options.headers,
                'Authorization': `Bearer ${this.apiToken}`
            }