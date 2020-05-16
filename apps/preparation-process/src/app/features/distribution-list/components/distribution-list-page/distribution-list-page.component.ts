import { Component, OnInit, ViewChild } from '@angular/core';
import { TableViewerComponent } from '../table-viewer/table-viewer.component';
import { StateProcessService } from '@bid/bid-api-service';

@Component({
    selector: 'bid-distribution-list-page',
    templateUrl: './distribution-list-page.component.html',
    styles: []
})
export class DistributionListPageComponent implements OnInit {
    @ViewChild('#memberListTable') memberListTable: TableViewerComponent;

    public addActive: boolean;
    public readonly: boolean;

    constructor(private stateProcessService: StateProcessService) {}

    ngOnInit(): void {
        this.initStates();
    }

    private initStates(): void {
        this.addActive = false;
        this.readonly =
            this.stateProcessService.currentIdCode !== 'PP.UPLOAD.PACKAGE';
    }
}
