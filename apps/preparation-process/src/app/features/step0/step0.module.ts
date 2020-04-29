import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { Step0RoutingModule } from './step0-routing.module';
import { Step0Component } from './step0/step0.component';

@NgModule({
    declarations: [Step0Component],
    imports: [CommonModule, Step0RoutingModule, TranslateModule.forChild()]
})
export class Step0Module {}
