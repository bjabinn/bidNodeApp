import {
    Component,
    OnInit,
    Input,
    OnChanges,
    SimpleChange,
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
import { BidTranslateService } from '@bid/bid-translate';

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
    public itemMenu: Array<any>;

    private suscriptionsCollection: Subscription[] = [];

    constructor(
        private temporalDocService: TemporalDocumentService,
        private dialogService: DialogService,
        private blobDeletes: BlobDeletesViewStateService,
        private blobDownloads: BlobDownloadsViewStateService,
        private fileService: FilesService,
        private translateService: BidTranslateService
    ) {}

    ngOnInit(): void {
        this.initItemMenu();
        this.subscribeDownload();
    }

    ngOnChanges(changes: { [propKey: string]: SimpleChange }): void {
        this.changeItem(changes.documentItem);
    }

    public downloadAction(): void {
        this.fileService.downloadFile(
            this.documentItem.urlTemp,
            this.documentItem.name
        );
    }

    public replaceAction(): void {
        const dialogRef = this.dialogService.open({
            title: this.translateService.instant(
                'PPR_UPLOADDOCUMENT_MODALREPLACE'
            ),

            content: UploadFilesComponent,
            minWidth: 840
        });
        this.suscriptionsCollection.push(
            dialogRef.result.subscribe(res => {
                if (res === true) this.removeAction();
            })
        );
        const content = dialogRef.content.instance;
        content.limit = 1;
        content.documentRestriction = this.documentRestriction;
    }

    public removeAction(): void {
        this.blobDeletes.deleteItem(this.documentItem.tempName);
        this.temporalDocService.deleteTemporalDocumentFromCollection(
            this.documentItem.tempUuid
        );
    }

    private initItemMenu(): void {
        this.itemMenu = [
            {
                actionName: 'Download',
                click: () => this.downloadAction(),
                iconClass: 'far fa-download popup-icon'
            },
            {
                actionName: 'Replace',
                click: () => this.replaceAction(),
                iconClass: 'far fa-exchange popup-icon'
            },
            {
                actionName: 'Delete',
                click: () => this.removeAction(),
                iconClass: 'far fa-trash-alt popup-icon'
            }
        ];
    }

    private subscribeDownload(): void {
        this.suscriptionsCollection.push(
            this.blobDownloads.downloadedItems$.subscribe(res => {
                this.downloadUrl = res[0].url;
            })
        );
    }

    private changeItem(item: SimpleChange): void {
        this.documentItem = null;
        this.documentItem = item.currentValue;
    }

    private unsubscribeAll(): void {
        this.suscriptionsCollection.forEach((sub: Subscription) =>
            sub.unsubscribe()
        );
    }

    ngOnDestroy(): void {
        this.unsubscribeAll();
    }
}
