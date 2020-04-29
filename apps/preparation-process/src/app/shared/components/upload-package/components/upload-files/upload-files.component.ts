import {
    Component,
    Input,
    AfterContentChecked,
    OnInit,
    OnDestroy
} from '@angular/core';
import { DialogRef, DialogContentBase } from '@progress/kendo-angular-dialog';
import { FileRestrictions } from '@progress/kendo-angular-upload';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {
    BlobUploadsViewStateService,
    BlobItemUpload
} from '@bid/bid-api-service';
import { Observable, Subscription } from 'rxjs';
import { TemporalDocumentService } from '@bid/bid-api-service';

@Component({
    selector: 'bid-upload-files',
    templateUrl: './upload-files.component.html'
})
export class UploadFilesComponent extends DialogContentBase
    implements AfterContentChecked, OnInit, OnDestroy {
    @Input() limit: number;
    @Input() documentRestriction: FileRestrictions;

    public uploadForm: FormGroup;
    public myFiles: Array<any>;
    public submitted = false;
    public isMultiple: boolean;
    public prevContent: string;
    public newContent: string;
    public nextContent: string;
    public uploads$: Observable<BlobItemUpload[]> = this.blobState
        .uploadedItems$;

    private subscriptionsCollection: Subscription[] = [];

    constructor(
        public dialog: DialogRef,
        private fb: FormBuilder,
        private blobState: BlobUploadsViewStateService,
        private temporaDocService: TemporalDocumentService
    ) {
        super(dialog);
        this.uploadForm = this.fb.group({
            files: [this.myFiles, [Validators.required]]
        });
    }

    ngOnInit(): void {
        this.subscribeUploads();
    }

    ngAfterContentChecked(): void {
        this.checkLimit();
    }

    public onCancelAction(): void {
        this.dialog.close(false);
    }

    public save(files: FileList, valid: boolean): void {
        this.submitted = true;
        if (valid) {
            this.blobState.uploadItems(files);
            this.temporaDocService.addTemporalDocumentToCollection(files);
            this.dialog.close(true);
        }
    }

    public getProgress(progress: number): boolean {
        return progress === 100 ? true : false;
    }

    private subscribeUploads(): void {
        this.subscriptionsCollection.push(this.uploads$.subscribe());
    }

    private checkLimit(): void {
        this.isMultiple = this.limit > 1;
    }

    private unsubscribeAll(): void {
        this.subscriptionsCollection.forEach(sub => sub.unsubscribe);
    }

    ngOnDestroy(): void {
        this.unsubscribeAll();
    }
}
