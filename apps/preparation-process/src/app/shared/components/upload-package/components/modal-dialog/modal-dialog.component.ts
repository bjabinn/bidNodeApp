import { Component, OnInit, Input } from '@angular/core';
import { DialogService } from '@progress/kendo-angular-dialog';
import { UploadFilesComponent } from '@bid/pp/app/shared/components/upload-package/components/upload-files/upload-files.component';
import { FileRestrictions } from '@progress/kendo-angular-upload';

@Component({
    selector: 'bid-modal-dialog',
    templateUrl: './modal-dialog.component.html'
})
export class ModalDialogComponent implements OnInit {
    @Input() modalTitle: string;
    @Input() limit: number;
    @Input() documentRestriction: FileRestrictions;
    @Input() readonly: boolean;

    constructor(private dialogService: DialogService) {}

    ngOnInit(): void {}

    public showUploadComponent() {
        const dialogRef = this.dialogService.open({
            title: this.modalTitle,
            // Show component or string message
            content: UploadFilesComponent,
            minWidth: 840
        });
        const content = dialogRef.content.instance;
        content.limit = this.limit;
        content.documentRestriction = this.documentRestriction;
    }
}
