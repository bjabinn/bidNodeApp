import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { VpcManagerRoutingModule } from './vpc-manager-routing.module';
import { VpcManagerPageComponent } from './components/vpc-manager-page/vpc-manager-page.component';
import { SharedModule } from '@bid/pp/app/shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { ModalConfirmComponent } from './components/modal-confirm/modal-confirm.component';

import { ButtonsModule, ButtonModule } from '@progress/kendo-angular-buttons';
import { DialogModule, DialogsModule } from '@progress/kendo-angular-dialog';
import { InputsModule } from '@progress/kendo-angular-inputs';

@NgModule({
    declarations: [VpcManagerPageComponent, ModalConfirmComponent],
    imports: [
        DialogModule,
        DialogsModule,
        ButtonModule,
        ButtonsModule,
        InputsModule,
        FormsModule,
        CommonModule,
        VpcManagerRoutingModule,
        SharedModule,
        TranslateModule.forChild()
    ],
    exports: [VpcManagerPageComponent]
})
export class VpcManagerModule {}
