import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { BidTranslateModule } from '@bid/bid-translate';

//Componentes
import { HeaderComponent } from './components/header/header.component';
import { SelectLanguageComponent } from './components/select-language/select-language.component';
import { UploadPackageModule } from './components/upload-package/upload-package.module';

//Kendo
import { LayoutModule } from '@progress/kendo-angular-layout';
import { ButtonsModule } from '@progress/kendo-angular-buttons';

@NgModule({
    declarations: [HeaderComponent, SelectLanguageComponent],
    imports: [
        CommonModule,
        RouterModule,
        TranslateModule.forChild(),
        BidTranslateModule,
        LayoutModule,
        ButtonsModule,
        UploadPackageModule
    ],
    exports: [HeaderComponent, SelectLanguageComponent, UploadPackageModule]
})
export class SharedModule {}
