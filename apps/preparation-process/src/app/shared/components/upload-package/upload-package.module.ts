import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { ModalDialogComponent } from './components/modal-dialog/modal-dialog.component';
import { UploadFilesComponent } from './components/upload-files/upload-files.component';
import { DocumentItemComponent } from './components/document-item/document-item.component';
import { DocumentViewerComponent } from './components/document-viewer/document-viewer.component';

//Kendo
import { LayoutModule } from '@progress/kendo-angular-layout';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { DialogModule } from '@progress/kendo-angular-dialog';
import { UploadsModule } from '@progress/kendo-angular-upload';

@NgModule({
    declarations: [
        DocumentItemComponent,
        DocumentViewerComponent,
        UploadFilesComponent,
        ModalDialogComponent
    ],
    imports: [
        DialogModule,
        CommonModule,
        LayoutModule,
        ButtonsModule,
        DialogsModule,
        UploadsModule,
        FormsModule,
        ReactiveFormsModule,
        TranslateModule.forChild()
    ],
    exports: [
        DocumentItemComponent,
        DocumentViewerComponent,
        UploadFilesComponent,
        ModalDialogComponent
    ]
})
export class UploadPackageModule {}
