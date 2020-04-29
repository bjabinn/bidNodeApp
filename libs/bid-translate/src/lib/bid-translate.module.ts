import { NgModule, ModuleWithProviders } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    imports: [TranslateModule.forChild()],
    exports: [TranslateModule]
})
export class BidTranslateModule {
    public static forRoot(environment: any): ModuleWithProviders {
        return {
            ngModule: BidTranslateModule,
            providers: [
                {
                    provide: 'env',
                    useValue: environment
                }
            ]
        };
    }
}
