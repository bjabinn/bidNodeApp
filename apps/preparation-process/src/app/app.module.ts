import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import {
    HttpClientModule,
    HttpClient,
    HTTP_INTERCEPTORS
} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { environment } from '@bid/pp/environments/environment';

import {
    BidTranslateModule,
    BidTranslateService,
    BidTranslateLoader
} from '@bid/bid-translate';
import {
    TranslateModule,
    TranslateLoader,
    TranslateService
} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { BidHandleErrorsModule } from '@bid/bid-handle-errors';
import { BidHttpInterceptor, BidApiServiceModule } from '@bid/bid-api-service';
import { BidUtilsModule, BidStorageService } from '@bid/bid-utils';

//Kendo
import { LayoutModule } from '@progress/kendo-angular-layout';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';

//Rutas
import { AppRoutingModule } from './app-routing.module';

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}
/*export function loadTranslate(loader: BidTranslateService) {
    return (): Promise<void> => {
        return loader.init();
    };
}*/

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        CoreModule.forRoot(environment),
        BidUtilsModule.forRoot(environment),
        BidTranslateModule.forRoot(environment),
        BidHandleErrorsModule.forRoot(environment),
        BidApiServiceModule.forRoot(environment),
        TranslateModule.forRoot({
            defaultLanguage: 'en',
            loader: {
                provide: TranslateLoader,
                //useClass: BidTranslateLoader,
                //deps: [BidStorageService]
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
        LayoutModule,
        InputsModule,
        DropDownsModule
    ],
    entryComponents: [],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: BidHttpInterceptor,
            multi: true
        }
        /*{
            provide: APP_INITIALIZER,
            useFactory: loadTranslate,
            multi: true,
            deps: [BidTranslateService]
        }*/
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
