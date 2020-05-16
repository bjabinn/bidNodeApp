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
    BlobSharedViewStateService,
    AppStepsStepIdService,
    StateProcessService,
    StepStatus,
    DocumentsPackageType,
    Step,
    Type,
    DocumentModel,
    Document,
    DocumentsPackage,
    PhaseHistory
} from '@bid/bid-api-service';

//Models
import { NotificationGlobalService } from '@bid/bid-handle-errors';
import * as lodash from 'lodash';
@Component({
    selector: 'bid-vpc-manager-page',
    templateUrl: './vpc-manager-page.component.html',
    styles: []
})
export class VpcManagerPageComponent implements OnInit {
    @ViewChild('container') container: ElementRef;
    public documentCollection: DocumentModel[];
    public documentLimit: number;
    public documentRestriction: FileRestrictions;
    public documentFormatDate: string;
    public selectedLanguage: string;
    public languages: string[];
    public opened: boolean;
    public openedReturn: boolean;
    public readonly: boolean;

    public temporalDocuments$ = this.temporalDocService
        .temporalDocumentCollection$;
    public items$ = this.blobState.itemsInContainer$;

    private documentsPackage: DocumentsPackage;
    private suscriptionsCollection: Subscription[] = [];
    public active = false;
    public phaseData: any[] = [];

    constructor(
        private blobState: BlobSharedViewStateService,
        private temporalDocService: TemporalDocumentService,
        private stepsService: AppStepsStepIdService,
        private stateProcessService: StateProcessService,
        private router: Router,
        private ngs: NotificationGlobalService
    ) {
        this.opened = false;
        this.openedReturn = false;
        this.documentLimit = environment.stepsConf.uploadPackage.documentLimit;
        this.documentRestriction =
            environment.stepsConf.uploadPackage.documentRestriction;
        this.documentFormatDate =
            environment.stepsConf.uploadPackage.dateFormat;
        this.readonly = true;
    }

    ngOnInit(): void {
        this.getStepInfo('c5e0d01b-4990-4ad7-98ca-c338eda37a2e');
    }

    getStepInfo(id: string): void {
        this.suscriptionsCollection.push(
            this.stepsService.getStep(id).subscribe(data => {
                this.documentsPackage = data.documentsPackage;
                this.ifAvailableDocuments(this.documentsPackage);
                this.ifAvailablePhaseHistory(data.phaseHistories);
                this.stateProcessService.currentIdStep = data.step.id;
                this.readonly = data.step.status !== StepStatus.InProgress;
            })
        );
    }
    private ifAvailableDocuments(documentsPackage: DocumentsPackage): void {
        if (!lodash.isEmpty(documentsPackage.documents)) {
            this.temporalDocService.temporalMapper(
                this.documentsPackage.documents
            );
            this.selectedLanguage = this.documentsPackage.documents.pop().language;
        }
    }
    private ifAvailablePhaseHistory(phaseHistoryCollection: PhaseHistory[]) {
        if (!lodash.isEmpty(phaseHistoryCollection)) {
            this.phaseData = [...phaseHistoryCollection];
        }
    }
    onCloseConfirm(submit: boolean) {
        if (submit) {
            this.router.navigate(['/step3']);
            this.ngs.showSuccess(
                'Document submited to VPC Manager with success',
                1000
            );
        } else {
            this.opened = false;
        }
    }

    onCloseReturn(event) {
        console.log('EVENT', event);
        if (event.submit) {
            this.addTemporalDocumentToCollection();
            this.returnDocument(event);
        } else {
            this.openedReturn = false;
        }
    }
    private addTemporalDocumentToCollection() {
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
    }
    private returnDocument(event) {
        const response = new Step();
        response.command = 'ReturnToProjectTeam';
        if (event.comments) {
            response.reason = event.comments;
        }
        response.documentsPackage = this.documentsPackage;
        this.suscriptionsCollection.push(
            this.stepsService
                .return(this.stateProcessService.currentIdStep, response)
                .subscribe(() => {
                    this.router.navigate(['/upload-package']);
                    this.ngs.showSuccess(
                        'Return to upload document success',
                        1000
                    );
                })
        );
    }
}
