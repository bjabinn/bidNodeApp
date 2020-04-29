import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    UrlTree,
    CanLoad,
    Route,
    UrlSegment,
    Router
} from '@angular/router';

import { Observable } from 'rxjs';
import { UserService } from '@bid/bid-api-service';

@Injectable({
    providedIn: 'root'
})
export class LoginGuard implements CanLoad {
    constructor(private userSvc: UserService, private route: Router) {}

    canLoad(
        route: Route,
        segments: UrlSegment[]
    ): boolean | Observable<boolean> | Promise<boolean> {
        const isLogged = this.userSvc.isLogged();
        if (!isLogged) {
            this.route.navigate(['/step-0']);
        }
        return isLogged;
    }
}
