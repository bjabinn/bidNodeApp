import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { BidTranslateService } from './bidTranslateService';

@NgModule({
    imports: [CommonModule, TranslateModule]
})
export class BidTranslateModule {
    public static forRoot(environment: any): ModuleWithProviders {
        return {
            ngModule: BidTranslateModule,
            providers: [
                BidTranslateService,
                {
                    provide: 'env',
                    useValue: environment
                }
            ]
        };
    }
}
