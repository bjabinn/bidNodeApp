import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'bid-circulation-distributed-page',
    templateUrl: './circulation-distributed-page.component.html',
    styles: []
})
export class CirculationDistributedPageComponent implements OnInit {
    status: boolean = true;
    constructor() {}

    ngOnInit(): void {}

    toggleClass() {
        this.status = !this.status;
    }
}
