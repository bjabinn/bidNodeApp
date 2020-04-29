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
import { NotificationGlobalService } from '@bid/bid-handle-errors';
import { AppStepsStepIdService } from '@bid/bid-api-service';
import { StateProcessService } from '@bid/bid-api-service';

//Models
import { DocumentModel } from '@bid/bid-api-service';
import { DocumentsPackage } from '@bid/bid-api-service';
import { Document } from '@bid/bid-api-service';
import { Step } from '@bid/bid-api-service';
import { StepResponse } from '@bid/bid-api-service';

//Enum
import { Type } from '@bid/bid-api-service';
import { StepStatus } from '@bid/bid-api-service';

//Mapers
import { DocumentsPackageMapper } from '@bid/bid-api-service';
import { DocumentsPackageType } from '@bid/bid-api-service';
import { StepMapper } from '@bid/bid-api-service';

@Component({
    selector: 'bid-upload-package-page',
    templateUrl: './upload-package-page.component.html'
})
export class UploadPackagePageComponent implements OnInit, OnDestroy {
    @ViewChild('container') container: ElementRef;
    public footerWidth: string;
    public headerTitle: string;
    public headerText: string;
    public headerLink: string;
    public modalTitle: string;
    public modalConfirm: string;
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
        private temporalDocService: TemporalDocumentService,
        private stepsService: AppStepsStepIdService,
        private stateProcessService: StateProcessService,
        private filesService: FilesService,
        private router: Router,
        private ngs: NotificationGlobalService
    ) {
        this.headerTitle = 'Upload PP Package';
        this.headerText =
            'The Project Team members must upload the Project Profile document in PDF format. Once this document has been uploaded, it should be submitted for validation.';
        this.headerLink = '#';
        this.blobState.getContainerItems(environment.azureContainer);
        this.modalTitle = 'Submit Document to Division Chief for Validation';
        this.modalConfirm = 'Submit for Validation';
        this.opened = false;
        this.selectedLanguage = '';
        this.languages = environment.stepsConf.uploadPackage.languages;
        this.documentLimit = environment.stepsConf.uploadPackage.documentLimit;
        this.documentRestriction =
            environment.stepsConf.uploadPackage.documentRestriction;
        this.documentFormatDate =
            environment.stepsConf.uploadPackage.dateFormat;

        this.filesService.documentType =
            environment.stepsConf.uploadPackage.documentType;
        this.filesService.documentVersion =
            environment.stepsConf.uploadPackage.documentVersion;
        this.filesService.dateFormat =
            environment.stepsConf.uploadPackage.dateFormat;
    }
    calcWidth(): string {
        return `calc(${
            this.container
                ? this.container.nativeElement.offsetWidth + 'px'
                : '100%'
        } + (3rem - 2px))`;
    }

    ngOnInit(): void {
        this.getStepInfo('c5e0d01b-4990-4ad7-98ca-c338eda37a2e');
    }

    getStepInfo(id: string): void {
        this.suscriptionsCollection.push(
            this.stepsService.getStepsStepId(id).subscribe((data: Step) => {
                this.documentsPackage = Object.assign(data.documentsPackage);
                if (this.documentsPackage.documents.length > 0) {
                    this.temporalDocService.temporalMapper(
                        this.documentsPackage.documents
                    );
                    this.selectedLanguage = this.documentsPackage.documents.pop().language;
                }
                this.stateProcessService.currentIdStep = data.step.id;
                this.readonly = data.step.status !== StepStatus.InProgress;
            })
        );
    }

    onCloseConfirm(submit: boolean) {
        this.opened = false;
        if (submit) {
            this.temporalDocuments$.subscribe(
                (temporalDocuments: DocumentModel[]) => {
                    const documents: Document[] = [];
                    const datePipe = new DatePipe('en-US');
                    temporalDocuments.forEach(doc => {
                        const document: Document = {
                            language: this.selectedLanguage,
                            blobId: doc.tempUuid,
                            extension: doc.name.split('.').pop(),
                            type: Type.MainDocument,
                            version: doc.version,
                            created: datePipe.transform(
                                doc.uploadedOn,
                                environment.stepsConf.uploadPackage.dateFormat
                            ),
                            createdBy: doc.user.name
                        };
                        documents.push(document);
                    });
                    this.documentsPackage.type = DocumentsPackageType.PP;
                    this.documentsPackage.documents = documents;
                }
            );

            const response = new Step();
            response.command = 'SubmitToDivisionChief';
            response.documentsPackage = this.documentsPackage;
            this.suscriptionsCollection.push(
                this.stepsService
                    .postStepsStepId(
                        this.stateProcessService.currentIdStep,
                        response
                    )
                    .subscribe(() => {
                        this.router.navigate(['/vpc-manager']);
                        this.ngs.showSuccess(
                            'Document submited to Validation Chief with success',
                            1000
                        );
                    })
            );
        }
    }

    unsubscribeAll() {
        this.suscriptionsCollection.forEach((sub: Subscription) =>
            sub.unsubscribe()
        );
    }
    ngOnDestroy() {
        this.unsubscribeAll();
    }
}
