import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '@bid/bid-api-service';
import { Role } from '@bid/bid-api-service';
import { BidStorageService } from '@bid/bid-utils';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private userInfo;

    constructor(
        private route: Router,
        private bidStorageSvc: BidStorageService
    ) {}

    public setUser(user: User, mustSave: boolean) {
        this.reset();
        this.userInfo = user;
        if (mustSave) {
            this.bidStorageSvc.set('currentUser', this.userInfo);
        }
    }

    public getUser(): User {
        const user = this.bidStorageSvc.get('currentUser');
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
        this.bidStorageSvc.delete('currentUser');
    }
}
