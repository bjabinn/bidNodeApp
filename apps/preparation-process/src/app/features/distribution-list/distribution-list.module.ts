import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '@bid/pp/app/shared/shared.module';
import { DistributionListPageComponent } from './components/distribution-list-page/distribution-list-page.component';
import { TableViewerComponent } from './components/table-viewer/table-viewer.component';
import { EditFormComponent } from './components/edit-form/edit-form.component';

//Kendo
import { GridModule, PDFModule } from '@progress/kendo-angular-grid';
import { DialogModule } from '@progress/kendo-angular-dialog';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { ModalConfirmComponent } from './components/modal-confirm/modal-confirm.component';
import { TooltipModule } from '@progress/kendo-angular-tooltip';

import { DistributionListRouting } from './distribution-list-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from '@progress/kendo-angular-buttons';

@NgModule({
    declarations: [
        DistributionListPageComponent,
        TableViewerComponent,
        EditFormComponent,
        ModalConfirmComponent
    ],
    imports: [
        CommonModule,
        DistributionListRouting,
        FormsModule,
        SharedModule,
        GridModule,
        DialogModule,
        PDFModule,
        DropDownsModule,
        TooltipModule,
        TranslateModule.forChild(),
        ButtonModule
    ],
    exports: [DistributionListPageComponent]
})
export class DistributionListModule {}
