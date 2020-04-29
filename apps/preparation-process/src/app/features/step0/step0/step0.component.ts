import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '@bid/bid-api-service';

@Component({
    selector: 'bid-step0',
    templateUrl: './step0.component.html'
})
export class Step0Component implements OnInit {
    public initialProcess = false;
    public hasTemplate = false;
    public confirmButton = '';

    constructor(private userService: UserService, private route: Router) {
        this.isLogged();
    }

    ngOnInit(): void {
        if (true) {
            // TODO send to select template
            this.hasTemplate = true;
            this.confirmButton = 'PPR_STEPZERO_SUBMIT';
        } else {
            this.confirmButton = 'PPR_STEPZERO_RETURN';
        }
    }

    startProcess(event: boolean) {
        if (event) {
            const tempUser = {
                uuid: '498574892njfnvf',
                name: 'MRIBASRUIZ',
                role: {
                    uuid: '1342v',
                    name: 'Admin',
                    value: 'admin'
                }
            };
            this.userService.setUser(tempUser, true);
            this.route.navigate(['/upload-package']);
        } else {
            alert('Ir a selector Life Cycle');
        }
    }

    private isLogged() {
        if (this.userService.isLogged()) {
            this.route.navigate(['/upload-package']);
        } else {
            this.initialProcess = true;
        }
    }
}
