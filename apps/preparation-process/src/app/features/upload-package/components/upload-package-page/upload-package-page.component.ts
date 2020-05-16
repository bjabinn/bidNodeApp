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
    BlobSharedViewStateService,
    Step,
    Meeting
} from '@bid/bid-api-service';
import { NotificationGlobalService } from '@bid/bid-handle-errors';
import { ApiProperty } from '@nestjs/swagger';
import {
    UserService,
    StateProcessService,
    AppStepsStepIdService
} from '@bid/bid-api-service';

//Models
import { DocumentModel } from '@bid/bid-api-service';
import { DocumentsPackage } from '@bid/bid-api-service';

import { Document } from '@bid/bid-api-service';

//Enum
import { Type } from '@bid/bid-api-service';
import { StepStatus } from '@bid/bid-api-service';
import { Role } from '@bid/pp/app/core/enums/role.enum';

//Mapers
import { DocumentsPackageType } from '@bid/bid-api-service';
import { MeetingMapper } from '@bid/bid-api-service';
import { PhaseHistory } from 'libs/bid-api-service/src/lib/models/phaseHistories.model';
import * as lodash from 'lodash';
@Component({
    selector: 'bid-upload-package-page',
    templateUrl: './upload-package-page.component.html'
})
export class UploadPackagePageComponent implements OnInit, OnDestroy {
    @ViewChild('container') container: ElementRef;
    public footerWidth: string;
    public documentCollection: DocumentModel[];
    public documentLimit: number;
    public documentRestriction: FileRestrictions;
    public documentFormatDate: string;
    public selectedLanguage: string;
    public languages: string[];
    public opened: boolean;
    public openDeleteModal = false;
    public readonly: boolean;
    public deletePermission = false;
    public active = false;
    public phaseData: any[] = [];

    public temporalDocuments$ = this.temporalDocService
        .temporalDocumentCollection$;
    public items$ = this.blobState.itemsInContainer$;

    private documentsPackage: DocumentsPackage;
    private suscriptionsCollection: Subscription[] = [];

    constructor(
        private blobState: BlobSharedViewStateService,
        private userSvc: UserService,
        private temporalDocService: TemporalDocumentService,
        private stepsService: AppStepsStepIdService,
        private stateProcessService: StateProcessService,
        private filesService: FilesService,
        private router: Router,
        private ngs: NotificationGlobalService
    ) {}

    ngOnInit(): void {
        const userdata = this.userSvc.getUser();
        this.initBlob();
        this.initLanguagesConfig();
        this.initDocumentsConfig();
        this.initFileServiceConfig();
        this.getStepInfo('c5e0d01b-4990-4ad7-98ca-c338eda37a2e');
        if (userdata.role && userdata.role.value === Role.Administrador) {
            this.deletePermission = true;
        }
    }

    private getStepInfo(id: string): void {
        this.suscriptionsCollection.push(
            this.stepsService.getStep(id).subscribe((data: Step) => {
                this.documentsPackage = Object.assign(data.documentsPackage);
                this.ifAvailableDocuments(this.documentsPackage);
                this.ifAvailableMeetings(data.meeting);
                this.ifAvailablePhaseHistory(data.phaseHistories);
                this.stateProcessService.currentIdStep = data.step.id;
                this.stateProcessService.currentIdCode = data.step.code;
                this.readonly = data.step.status !== StepStatus.InProgress;
            })
        );
    }

    private ifAvailableDocuments(documentsPackage: DocumentsPackage): void {
        if (!lodash.isEmpty(documentsPackage.documents)) {
            this.temporalDocService.temporalMapper(
                this.documentsPackage.documents
            );
            this.selectedLanguage = documentsPackage.documents[0].language;
        }
    }

    private ifAvailableMeetings(meetingCollection: Meeting[]): void {
        if (!lodash.isEmpty(meetingCollection)) {
            this.stateProcessService.currentMeeting = MeetingMapper.mapToModel(
                meetingCollection
            )[0];
        }
    }
    private ifAvailablePhaseHistory(phaseHistoryCollection: PhaseHistory[]) {
        if (!lodash.isEmpty(phaseHistoryCollection)) {
            this.phaseData = [...phaseHistoryCollection];
        }
    }

    onCloseConfirm(submit: boolean) {
        this.opened = false;
        if (submit) {
            this.addTemporalDocumentToCollection();
            this.goToNextStep();
        }
    }

    private goToNextStep() {
        const response = new Step();
        response.command = 'SubmitToDivisionChief';
        response.documentsPackage = this.documentsPackage;
        this.suscriptionsCollection.push(
            this.stepsService
                .nextMove(this.stateProcessService.currentIdStep, response)
                .subscribe(() => {
                    this.router.navigate(['/vpc-manager']);
                    this.ngs.showSuccess(
                        'Document submited to Validation Chief with success',
                        1000
                    );
                })
        );
    }

    private addTemporalDocumentToCollection() {
        this.temporalDocuments$.subscribe(
            (temporalDocuments: DocumentModel[]) => {
                const documents: Document[] = [];
                const datePipe = new DatePipe('en-US');
                temporalDocuments.forEach((doc: DocumentModel) => {
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
    private initBlob(): void {
        this.blobState.getContainerItems(environment.azureContainer);
    }

    private initLanguagesConfig() {
        this.selectedLanguage = '';
        this.languages = environment.stepsConf.uploadPackage.languages;
    }

    private initDocumentsConfig(): void {
        this.documentLimit = environment.stepsConf.uploadPackage.documentLimit;
        this.documentRestriction =
            environment.stepsConf.uploadPackage.documentRestriction;
        this.documentFormatDate =
            environment.stepsConf.uploadPackage.dateFormat;
    }

    private initFileServiceConfig(): void {
        this.filesService.documentType =
            environment.stepsConf.uploadPackage.documentType;
        this.filesService.documentVersion =
            environment.stepsConf.uploadPackage.documentVersion;
        this.filesService.dateFormat =
            environment.stepsConf.uploadPackage.dateFormat;
    }

    private unsubscribeAll(): void {
        this.suscriptionsCollection.forEach((sub: Subscription) =>
            sub.unsubscribe()
        );
    }

    deleteTemplate(event: Event) {
        if (event) {
            this.userSvc.logOut();
        } else {
            this.openDeleteModal = false;
        }
    }

    ngOnDestroy() {
        this.unsubscribeAll();
    }
}
