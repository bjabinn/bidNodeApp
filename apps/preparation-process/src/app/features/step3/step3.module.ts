import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Step3RoutingModule } from './step3-routing.module';
import { MainPageComponent } from './components/main-page/main-page.component';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { CheckBoxModule, SwitchModule } from '@progress/kendo-angular-inputs';
import { SharedModule } from '../../shared/shared.module';
import { CirculationPageComponent } from './components/circulation-page/circulation-page.component';
import { CirculationDistributedPageComponent } from './components/circulation-distributed-page/circulation-distributed-page.component';

@NgModule({
    declarations: [
        MainPageComponent,
        CirculationPageComponent,
        CirculationDistributedPageComponent
    ],
    imports: [
        CommonModule,
        Step3RoutingModule,
        DateInputsModule,
        CheckBoxModule,
        SwitchModule,
        SharedModule
    ]
})
export class Step3Module {}
