import { Injectable } from '@angular/core';
import {
    CanActivate,
    RouterStateSnapshot,
    ActivatedRouteSnapshot,
    Router
} from '@angular/router';
import { StateProcessService } from '@bid/bid-api-service';

@Injectable({
    providedIn: 'root'
})
export class DistributionListGuard implements CanActivate {
    constructor(
        private stateService: StateProcessService,
        private router: Router
    ) {}
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean {
        if (this.stateService.currentMeeting) return true;
        else {
            this.router.navigate(['upload-package']);
            return false;
        }
    }
}
