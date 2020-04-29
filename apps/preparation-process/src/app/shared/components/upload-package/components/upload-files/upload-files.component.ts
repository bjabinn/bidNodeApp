import {
    Component,
    Input,
    AfterContentChecked,
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
    implements AfterContentChecked, OnDestroy {
    @Input() limit: number;
    @Input() documentRestriction: FileRestrictions;

    public uploads$: Observable<BlobItemUpload[]>;
    public uploadForm: FormGroup;
    public myFiles: Array<any>;
    public submitted = false;
    public isMultiple: boolean;
    public prevContent: string;
    public newContent: string;
    public nextContent: string;

    private subscription: Subscription;

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

        this.uploads$ = this.blobState.uploadedItems$;
        this.subscription = this.uploads$.subscribe();
        this.prevContent = 'Drag an drop a file here or ';
        this.newContent = 'Choose files';
        this.nextContent = ' from your computer.';
    }

    ngAfterContentChecked() {
        this.limit > 1 ? (this.isMultiple = true) : (this.isMultiple = false);
    }
    onCancelAction() {
        this.dialog.close(false);
    }
    save(files: FileList, valid: boolean) {
        this.submitted = true;
        if (valid) {
            this.blobState.uploadItems(files);
            this.temporaDocService.addTemporalDocumentToCollection(files);
            this.dialog.close(true);
        }
    }

    getProgress(progress: number): boolean {
        return progress === 100 ? true : false;
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
