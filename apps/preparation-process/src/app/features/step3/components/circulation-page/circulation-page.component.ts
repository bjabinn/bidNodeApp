import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'bid-circulation-page',
    templateUrl: './circulation-page.component.html',
    styles: []
})
export class CirculationPageComponent implements OnInit {
    // public range = { start: null, end: null };
    public value1: Date = new Date(2000, 2, 10);
    public value2: Date = new Date(2000, 2, 10);
    public popupClass = 'k-popup--datepicker';
    // public checked: boolean = false;

    constructor() {}

    ngOnInit(): void {}
}
