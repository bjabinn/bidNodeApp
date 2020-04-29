import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '@bid/pp/app/shared/shared.module';
import { DistributionListPageComponent } from './components/distribution-list-page/distribution-list-page.component';
import { TableViewerComponent } from './components/table-viewer/table-viewer.component';
import { AddMemberComponent } from './components/add-member/add-member.component';

//Kendo
import { GridModule, ExcelModule } from '@progress/kendo-angular-grid';
import { DialogModule } from '@progress/kendo-angular-dialog';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { ModalConfirmComponent } from './components/modal-confirm/modal-confirm.component';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { ButtonModule } from '@progress/kendo-angular-buttons';

//Routes
import { DistributionListRouting } from './distribution-list-routing.module';

@NgModule({
    declarations: [
        DistributionListPageComponent,
        TableViewerComponent,
        AddMemberComponent,
        ModalConfirmComponent
    ],
    imports: [
        DistributionListRouting,
        FormsModule,
        SharedModule,
        GridModule,
        DialogModule,
        ExcelModule,
        DropDownsModule,
        TooltipModule,
        ButtonModule
    ],
    exports: [DistributionListPageComponent]
})
export class DistributionListModule {}
