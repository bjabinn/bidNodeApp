import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
@NgModule({
    declarations: [],
    imports: [CommonModule]
})
export class CoreModule {
    public static forRoot(environment: any): ModuleWithProviders {
        return {
            ngModule: CoreModule,
            providers: [
                {
                    provide: 'env', // you can also use InjectionToken
                    useValue: environment
                }
            ]
        };
    }
}
