import {
    Component,
    OnInit,
    OnDestroy,
    ViewChild,
    ElementRef
} from '@angular/core';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { Subscription } from 'rxjs';
import { environment } from '@bid/pp/environments/environment';
import { FileRestrictions } from '@progress/kendo-angular-upload';

//Services
import {
    TemporalDocumentService,
    FilesService,
    BlobSharedViewStateService
} from '@bid/bid-api-service';

//Models
import { DocumentModel } from '@bid/bid-api-service';
import { DocumentsPackage } from '@bid/bid-api-service';

@Component({
    selector: 'bid-vpc-manager-page',
    templateUrl: './vpc-manager-page.component.html',
    styles: []
})
export class VpcManagerPageComponent implements OnInit {
    public documentCollection: DocumentModel[];
    public documentLimit: number;
    public documentRestriction: FileRestrictions;
    public documentFormatDate: string;
    public selectedLanguage: string;
    public languages: string[];
    public opened: boolean;
    public readonly: boolean;

    public temporalDocuments$ = this.temporalDocService
        .temporalDocumentCollection$;
    public items$ = this.blobState.itemsInContainer$;

    private documentsPackage: DocumentsPackage;
    private suscriptionsCollection: Subscription[] = [];

    constructor(
        private blobState: BlobSharedViewStateService,
        private temporalDocService: TemporalDocumentService
    ) {
        this.opened = false;
        this.documentLimit = environment.stepsConf.uploadPackage.documentLimit;
        this.documentRestriction =
            environment.stepsConf.uploadPackage.documentRestriction;
        this.documentFormatDate =
            environment.stepsConf.uploadPackage.dateFormat;
        this.readonly = true;
    }

    ngOnInit(): void {}

    onCloseConfirm(submit: boolean) {}
}
