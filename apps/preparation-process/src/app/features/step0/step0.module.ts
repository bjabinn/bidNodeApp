import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { Step0RoutingModule } from './step0-routing.module';
import { Step0Component } from './step0/step0.component';
import { ModalConfirmComponent } from './modal-confirm/modal-confirm.component';

import { DialogModule } from '@progress/kendo-angular-dialog';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { ButtonsModule, ButtonModule } from '@progress/kendo-angular-buttons';
@NgModule({
    declarations: [Step0Component, ModalConfirmComponent],
    imports: [
        CommonModule,
        DialogModule,
        ButtonsModule,
        ButtonModule,
        DialogsModule,
        Step0RoutingModule,
        TranslateModule.forChild()
    ]
})
export class Step0Module {}
