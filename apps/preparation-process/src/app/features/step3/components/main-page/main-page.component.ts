import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'bid-main-page',
    templateUrl: './main-page.component.html',
    styles: []
})
export class MainPageComponent implements OnInit {
    public range = { start: null, end: null };

    public headerTitle: string;
    public headerText: string;
    public headerLink: string;

    constructor() {
        this.headerTitle = 'Distribute & Start Meeting';
        this.headerText =
            'VPC Manager will review and distribute the PP Package. Once the packege has been distributed, the Circulation Period will start.';
        this.headerLink = '#';
    }

    ngOnInit(): void {}
}
