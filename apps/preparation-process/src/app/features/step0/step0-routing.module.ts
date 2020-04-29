import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Step0Component } from './step0/step0.component';

const routes: Routes = [{ path: '', component: Step0Component }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class Step0RoutingModule {}
