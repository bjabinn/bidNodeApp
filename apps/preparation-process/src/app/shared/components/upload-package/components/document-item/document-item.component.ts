import {
    Component,
    OnInit,
    Input,
    OnChanges,
    SimpleChanges,
    OnDestroy
} from '@angular/core';
import { Subscription } from 'rxjs';
import { DocumentModel } from '@bid/bid-api-service';
import {
    BlobDeletesViewStateService,
    BlobDownloadsViewStateService,
    FilesService,
    TemporalDocumentService
} from '@bid/bid-api-service';

import { UploadFilesComponent } from '@bid/pp/app/shared/components/upload-package/components/upload-files/upload-files.component';
import { DialogService } from '@progress/kendo-angular-dialog';
import { FileRestrictions } from '@progress/kendo-angular-upload';

@Component({
    selector: 'bid-document-item',
    templateUrl: './document-item.component.html'
})
export class DocumentItemComponent implements OnInit, OnChanges, OnDestroy {
    @Input() documentItem: DocumentModel;
    @Input() documentRestriction: FileRestrictions;
    @Input() formatDate: string;
    @Input() readonly: boolean;

    public downloads$;
    public downloadUrl = '';
    public deletedItems$ = this.blobDeletes.deletedItems$;
    public popupClass = 'k-popup--document';

    private suscriptionsCollection: Subscription[] = [];

    data: Array<any> = [
        {
            actionName: 'Download',
            click: () => {
                this.downloadAction(this.documentItem.tempName);
            },
            iconClass: 'far fa-download popup-icon'
        },
        {
            actionName: 'Replace',
            click: () => {
                this.replaceAction(this.documentItem.tempUuid);
            },
            iconClass: 'far fa-exchange popup-icon'
        },
        {
            actionName: 'Delete',
            click: () => {
                this.removeAction(this.documentItem.tempName);
            },
            iconClass: 'far fa-trash-alt popup-icon'
        }
    ];
    constructor(
        private temporalDocService: TemporalDocumentService,
        private dialogService: DialogService,
        private blobDeletes: BlobDeletesViewStateService,
        private blobDownloads: BlobDownloadsViewStateService,
        private fileService: FilesService
    ) {
        this.suscriptionsCollection.push(
            this.blobDownloads.downloadedItems$.subscribe(res => {
                this.downloadUrl = res[0].url;
            })
        );
    }
    ngOnChanges(change: SimpleChanges) {
        this.documentItem = null;
        this.documentItem = change.documentItem.currentValue;
    }
    ngOnInit(): void {}

    downloadAction(name: string, event?: Event) {
        if (event) {
            event.preventDefault();
        }
        this.fileService.downloadFile(this.documentItem.urlTemp, name);
    }

    replaceAction(name: string) {
        const dialogRef = this.dialogService.open({
            title: 'Replace Document',
            // Show component or string message
            content: UploadFilesComponent,
            minWidth: 840
        });
        this.suscriptionsCollection.push(
            dialogRef.result.subscribe(res => {
                if (res) {
                    this.removeAction(name);
                }
            })
        );
        const content = dialogRef.content.instance;
        content.limit = 1;
        content.documentRestriction = this.documentRestriction;
    }

    removeAction(filename: string) {
        this.blobDeletes.deleteItem(filename);
        this.temporalDocService.deleteTemporalDocumentFromCollection(
            this.documentItem.tempUuid
        );
    }

    ngOnDestroy() {
        this.unsubscribeAll();
    }

    unsubscribeAll() {
        this.suscriptionsCollection.forEach((sub: Subscription) =>
            sub.unsubscribe()
        );
    }
}
