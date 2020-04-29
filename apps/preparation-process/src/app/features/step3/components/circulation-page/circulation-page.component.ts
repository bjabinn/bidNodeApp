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
    public value3: Date = new Date(2000, 2, 10);
    public datepickerClass = 'k-popup--datepicker';
    public steps = { hour: 1, minute: 30 };
    public timepickerClass = 'k-popup--timepicker';
    // public checked: boolean = false;

    constructor() {}

    ngOnInit(): void {}
}
