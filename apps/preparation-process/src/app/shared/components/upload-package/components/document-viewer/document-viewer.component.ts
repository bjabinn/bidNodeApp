import { Component, OnInit, Input } from '@angular/core';
import { DocumentModel } from '@bid/pp/app/core/models/document.model';
import { BehaviorSubject } from 'rxjs';
import { FileRestrictions } from '@progress/kendo-angular-upload';

@Component({
    selector: 'bid-document-viewer',
    templateUrl: './document-viewer.component.html'
})
export class DocumentViewerComponent implements OnInit {
    @Input() documentCollection: BehaviorSubject<DocumentModel[]>;
    @Input() documentRestriction: FileRestrictions;
    @Input() formatDate: string;
    @Input() limit: number;
    @Input() readonly: boolean;

    constructor() {}

    ngOnInit(): void {}
}
