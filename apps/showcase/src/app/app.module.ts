import { environment } from '@bid/pp/environments/environment';
import { BidHandleErrorsModule } from '@bid/bid-handle-errors';
import { BrowserModule } from '@angular/platform-browser';
import { BidTranslateModule } from '@bid/bid-translate';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BidHttpInterceptor, BidApiServiceModule } from '@bid/bid-api-service';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DialogModule } from '@progress/kendo-angular-dialog';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { UploadModule } from '@progress/kendo-angular-upload';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { IntlModule } from '@progress/kendo-angular-intl';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { ScrollViewModule } from '@progress/kendo-angular-scrollview';

// Components example
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { ErrorHandlerComponent } from './components/error-handler/error-handler.component';

// Pages example
import { SelectLanguageComponent } from './example-pages/select-language/select-language.component';
import { OldStyleGuideComponent } from './components/old-style-guide/old-style-guide.component';
import { HeadingsComponent } from './components/old-style-guide/headings/headings.component';
import { ButtonsComponent } from './components/old-style-guide/buttons/buttons.component';
import { OperationListComponent } from './components/old-style-guide/operation-list/operation-list.component';
import { OperationFiltersComponent } from './components/old-style-guide/operation-filters/operation-filters.component';
import { FormsComponent } from './components/old-style-guide/forms/forms.component';
import { TablesComponent } from './components/old-style-guide/tables/tables.component';
import { ModalsComponent } from './components/old-style-guide/modals/modals.component';
import { CardsComponent } from './components/old-style-guide/cards/cards.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    declarations: [
        AppComponent,
        PageNotFoundComponent,
        HomeComponent,
        ErrorHandlerComponent,
        OldStyleGuideComponent,
        SelectLanguageComponent,
        HeadingsComponent,
        ButtonsComponent,
        OperationListComponent,
        OperationFiltersComponent,
        FormsComponent,
        TablesComponent,
        ModalsComponent,
        CardsComponent
    ],
    imports: [
        FormsModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        InputsModule,
        ButtonsModule,
        DialogsModule,
        UploadModule,
        IntlModule,
        DialogModule,
        LayoutModule,
        ScrollViewModule,
        BidHandleErrorsModule.forRoot(environment),
        BidApiServiceModule.forRoot(environment),
        BidTranslateModule.forRoot(environment),
        AppRoutingModule
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: BidHttpInterceptor,
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
