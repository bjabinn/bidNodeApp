import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BidStorageService } from './bidStorageService';

@NgModule({
    imports: [CommonModule]
})
export class BidUtilsModule {
    public static forRoot(environment: any): ModuleWithProviders {
        return {
            ngModule: BidUtilsModule,
            providers: [
                BidStorageService,
                {
                    provide: 'env',
                    useValue: environment
                }
            ]
        };
    }
}
