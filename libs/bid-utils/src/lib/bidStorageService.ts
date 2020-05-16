import { Injectable } from '@angular/core';
@Injectable({ providedIn: 'root' })
export class BidStorageService {
    constructor() {}

    check(key: string): boolean {
        return localStorage.getItem(key) !== null;
    }

    get(key: string): any {
        const value = localStorage.getItem(key);
        if (this.isJSON(value)) return JSON.parse(value);
        else return value;
    }

    set(key: string, value: any) {
        if (typeof value === 'object')
            localStorage.setItem(key, JSON.stringify(value));
        else localStorage.setItem(key, value);
    }

    delete(key: string) {
        localStorage.removeItem(key);
    }

    deleteAll() {
        localStorage.clear();
    }

    private isJSON(value: any): boolean {
        try {
            JSON.parse(value);
            return true;
        } catch (e) {
            return false;
        }
    }
}
