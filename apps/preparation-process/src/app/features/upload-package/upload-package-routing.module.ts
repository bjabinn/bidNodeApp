import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { UploadPackagePageComponent } from './components/upload-package-page/upload-package-page.component';

const uploadRoutes: Routes = [
    { path: '', component: UploadPackagePageComponent }
];

@NgModule({
    imports: [RouterModule.forChild(uploadRoutes)],
    exports: [RouterModule]
})
export class UploadPackageRoutingModule {}
