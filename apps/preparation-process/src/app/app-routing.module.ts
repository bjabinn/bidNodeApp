import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginGuard } from './core/guards/login.guard';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/step-0',
        pathMatch: 'full'
    },
    {
        path: 'step-0',
        loadChildren: () =>
            import('./features/step0/step0.module').then(m => m.Step0Module)
    },
    {
        path: 'upload-package',
        loadChildren: () =>
            import('./features/upload-package/upload-package.module').then(
                m => m.UploadPackageModule
            ),
        canLoad: [LoginGuard]
    },
    {
        path: 'distribution-list',
        loadChildren: () =>
            import(
                './features/distribution-list/distribution-list.module'
            ).then(m => m.DistributionListModule),
        canLoad: [LoginGuard]
    },
    {
        path: 'vpc-manager',
        loadChildren: () =>
            import('./features/vpc-manager/vpc-manager.module').then(
                m => m.VpcManagerModule
            ),
        canLoad: [LoginGuard]
    },
    {
        path: 'step3',
        loadChildren: () =>
            import('./features/step3/step3.module').then(m => m.Step3Module),
        canLoad: [LoginGuard]
    },
    { path: '**', redirectTo: '/step-0' }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
