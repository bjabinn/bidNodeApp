import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '@bid/bid-api-service';

@Component({
    selector: 'bid-step0',
    templateUrl: './step0.component.html',
    styleUrls: ['./step0.component.scss']
})
export class Step0Component implements OnInit {
    public initialProcess = false;

    constructor(private userService: UserService, private route: Router) {
        this.isLogged();
    }

    ngOnInit(): void {}

    startProcess(event: Event) {
        event.preventDefault();
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
    }

    private isLogged() {
        if (this.userService.isLogged()) {
            this.route.navigate(['/upload-package']);
        } else {
            this.initialProcess = true;
        }
    }
}
