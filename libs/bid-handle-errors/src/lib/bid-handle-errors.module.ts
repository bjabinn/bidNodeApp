import { LoggingService } from './logging.service';
import { NotificationGlobalService } from './notification-global.service';
import { NotificationModule } from '@progress/kendo-angular-notification';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule, NotificationModule]
})
export class BidHandleErrorsModule {

  public static forRoot(environment: any): ModuleWithProviders {

    return {
        ngModule: BidHandleErrorsModule,
        providers: [
            NotificationGlobalService,
            {
                provide: 'env', 
                useValue: environment
            },
            LoggingService
        ]
    };
}

}
