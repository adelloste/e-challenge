import { Injectable } from '@angular/core';

@Injectable()
export class StorageManagerService {

    constructor() { }

    store(key: string, value: any): void {
        localStorage.setItem(key, JSON.stringify(value));
    }

    get<T>(key: string): T {
        let data = localStorage.getItem(key);

        if (data)
            return JSON.parse(data);

        return null;
    }

    delete(key: string): void {
        localStorage.removeItem(key);
    }

}