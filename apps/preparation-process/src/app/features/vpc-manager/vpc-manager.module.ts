import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VpcManagerRoutingModule } from './vpc-manager-routing.module';
import { VpcManagerPageComponent } from './components/vpc-manager-page/vpc-manager-page.component';
import { SharedModule } from '@bid/pp/app/shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { ModalConfirmComponent } from './components/modal-confirm/modal-confirm.component';

@NgModule({
    declarations: [VpcManagerPageComponent, ModalConfirmComponent],
    imports: [
        CommonModule,
        VpcManagerRoutingModule,
        SharedModule,
        TranslateModule.forChild()
    ],
    exports: [VpcManagerPageComponent]
})
export class VpcManagerModule {}
