import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { DistributionListPageComponent } from './components/distribution-list-page/distribution-list-page.component';
import { DistributionListGuard } from './guards/distribution-list.guard';

const distributionRoutes: Routes = [
    {
        path: '',
        component: DistributionListPageComponent,
        canActivate: [DistributionListGuard]
    }
];

@NgModule({
    imports: [RouterModule.forChild(distributionRoutes)],
    exports: [RouterModule]
})
export class DistributionListRouting {}
