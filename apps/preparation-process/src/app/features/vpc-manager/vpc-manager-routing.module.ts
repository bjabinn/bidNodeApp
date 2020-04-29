import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VpcManagerPageComponent } from './components/vpc-manager-page/vpc-manager-page.component';

const routes: Routes = [{ path: '', component: VpcManagerPageComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class VpcManagerRoutingModule {}
