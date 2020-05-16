import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '@bid/pp/app/shared/shared.module';
import { ModalConfirmComponent } from './components/modal-confirm/modal-confirm.component';
import { UploadPackagePageComponent } from './components/upload-package-page/upload-package-page.component';

//Kendo
import { DialogModule } from '@progress/kendo-angular-dialog';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { ButtonsModule, ButtonModule } from '@progress/kendo-angular-buttons';
import { LayoutModule } from '@progress/kendo-angular-layout';

import { UploadPackageRoutingModule } from './upload-package-routing.module';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    declarations: [UploadPackagePageComponent, ModalConfirmComponent],
    imports: [
        DialogModule,
        ButtonsModule,
        ButtonModule,
        DialogsModule,
        CommonModule,
        SharedModule,
        FormsModule,
        ReactiveFormsModule,
        UploadPackageRoutingModule,
        LayoutModule,
        TranslateModule.forChild()
    ],
    exports: [UploadPackagePageComponent]
})
export class UploadPackageModule {}
