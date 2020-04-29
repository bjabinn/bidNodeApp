import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'bid-distribution-list-page',
    templateUrl: './distribution-list-page.component.html',
    styles: []
})
export class DistributionListPageComponent implements OnInit {
    public headerTitle: string;
    public headerText: string;
    public headerLink: string;
    public active: boolean;
    constructor() {
        this.headerTitle = 'Distribution List';
        this.headerText =
            "The Distribution List shows all the user who the document packages will be distributed to. The list is automatically uploaded taking into account the PR-200. By adding a user, their permissions in the Authorizations Module won't change";
        this.headerLink = '#';

        this.active = false;
    }

    ngOnInit(): void {}

    addMember(): void {
        this.active = true;
    }
}
