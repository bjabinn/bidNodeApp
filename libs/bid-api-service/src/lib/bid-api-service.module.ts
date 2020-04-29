import { BidHandleErrorsModule } from '@bid/bid-handle-errors';
import { BidUtilsModule } from '@bid/bid-utils';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TemporalDocumentService } from './api/temporalDocument.service';
import { BlobDeletesViewStateService } from './api/azure-storage/blob-deletes-view-state.service';
import { BlobDownloadsViewStateService } from './api/azure-storage/blob-downloads-view-state.service';
import { BlobSharedViewStateService } from './api/azure-storage/blob-shared-view-state.service';
import { BlobStorageService } from './api/azure-storage/blob-storage.service';
import { BlobUploadsViewStateService } from './api/azure-storage/blob-uploads-view-state.service';
import { SasGeneratorService } from './api/azure-storage/sas-generator.service';
import {
    azureBlobStorageFactory,
    BLOB_STORAGE_TOKEN
} from './api/azure-storage/token';
import { StateProcessService } from './services/state-process.service';
import { AppStepsStepIdService } from './services/steps-step-id.service';
@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        BidHandleErrorsModule,
        BidUtilsModule
    ]
})
export class BidApiServiceModule {
    public static forRoot(environment: any): ModuleWithProviders {
        return {
            ngModule: BidApiServiceModule,
            providers: [
                TemporalDocumentService,
                BlobDeletesViewStateService,
                BlobDownloadsViewStateService,
                BlobSharedViewStateService,
                BlobStorageService,
                BlobUploadsViewStateService,
                SasGeneratorService,
                StateProcessService,
                AppStepsStepIdService,
                TemporalDocumentService,
                {
                    provide: BLOB_STORAGE_TOKEN,
                    useFactory: azureBlobStorageFactory
                },
                {
                    provide: 'env', // you can also use InjectionToken
                    useValue: environment
                }
            ]
        };
    }
}
