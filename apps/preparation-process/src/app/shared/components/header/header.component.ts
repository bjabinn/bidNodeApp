import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';

@Component({
    selector: 'bid-header',
    templateUrl: './header.component.html',
    styles: []
})
export class HeaderComponent implements OnInit {
    @Input() title: string;
    @Input() text: string;
    @Input() link: string;
    @Input() back?: boolean;
    constructor(private location: Location) {}

    ngOnInit(): void {}

    public goBack(): void {
        this.location.back();
    }
}
