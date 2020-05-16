import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'bid-distribution-list-section',
    templateUrl: './distribution-list-section.component.html',
    styles: []
})
export class DistributionListSectionComponent implements OnInit {
    constructor(private router: Router) {}

    ngOnInit(): void {}

    public toDistributionList(): void {
        this.router.navigate(['/distribution-list']);
    }
}
