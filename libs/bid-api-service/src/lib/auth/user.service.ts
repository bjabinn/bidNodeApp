import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '@bid/bid-api-service';
import { Role } from '@bid/bid-api-service';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private userInfo;

    constructor(private route: Router) {}

    public setUser(user: User, mustSave: boolean) {
        this.reset();
        this.userInfo = user;
        if (mustSave) {
            localStorage.setItem('currentUser', JSON.stringify(this.userInfo));
        }
    }

    public getUser(): User {
        const user = JSON.parse(localStorage.getItem('currentUser'));
        return user || this.userInfo || {};
    }

    public isLogged(): boolean {
        return Object.keys(this.getUser()).length !== 0;
    }

    public logOut() {
        this.reset();
        this.route.navigate(['/login']);
    }

    private reset() {
        this.userInfo = null;
        localStorage.removeItem('currentUser');
    }
}
