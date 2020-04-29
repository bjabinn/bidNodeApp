import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Step3RoutingModule } from './step3-routing.module';
import { MainPageComponent } from './components/main-page/main-page.component';
import { SharedModule } from '../../shared/shared.module';
import { CirculationPageComponent } from './components/circulation-page/circulation-page.component';
import { CirculationDistributedPageComponent } from './components/circulation-distributed-page/circulation-distributed-page.component';
import { ReturnHistoryComponent } from './components/return-history/return-history.component';
import { TranslateModule } from '@ngx-translate/core';

//kendo
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { PanelBarModule } from '@progress/kendo-angular-layout';
import { TooltipModule } from '@progress/kendo-angular-tooltip';

@NgModule({
    declarations: [
        MainPageComponent,
        CirculationPageComponent,
        CirculationDistributedPageComponent,
        ReturnHistoryComponent
    ],
    imports: [
        CommonModule,
        Step3RoutingModule,
        DateInputsModule,
        SharedModule,
        InputsModule,
        PanelBarModule,
        TranslateModule.forChild(),
        TooltipModule
    ]
})
export class Step3Module {}
