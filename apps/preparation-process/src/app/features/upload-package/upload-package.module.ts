import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { SharedModule } from '@bid/pp/app/shared/shared.module';
import { ModalConfirmComponent } from './components/modal-confirm/modal-confirm.component';
import { UploadPackagePageComponent } from './components/upload-package-page/upload-package-page.component';

//Kendo
import { DialogModule } from '@progress/kendo-angular-dialog';

import { UploadPackageRoutingModule } from './upload-package-routing.module';

@NgModule({
    declarations: [UploadPackagePageComponent, ModalConfirmComponent],
    imports: [
        DialogModule,
        CommonModule,
        SharedModule,
        FormsModule,
        ReactiveFormsModule,
        UploadPackageRoutingModule,
        TranslateModule.forChild()
    ],
    exports: [UploadPackagePageComponent]
})
export class UploadPackageModule {}
