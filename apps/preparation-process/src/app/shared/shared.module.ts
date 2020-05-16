import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BidTranslateModule } from '@bid/bid-translate';

//Componentes
import { HeaderComponent } from './components/header/header.component';
import { DistributionListSectionComponent } from './components/distribution-list-section/distribution-list-section.component';
import { SelectLanguageComponent } from './components/select-language/select-language.component';
import { UploadPackageModule } from './components/upload-package/upload-package.module';
import { PhaseHistoryComponent } from './components/phase-history/phase-history.component';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';

//Kendo
import { LayoutModule } from '@progress/kendo-angular-layout';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { GridModule } from '@progress/kendo-angular-grid';
import { TooltipModule } from '@progress/kendo-angular-tooltip';

@NgModule({
    declarations: [
        HeaderComponent,
        SelectLanguageComponent,
        PhaseHistoryComponent,
        DistributionListSectionComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        BidTranslateModule,
        LayoutModule,
        ButtonsModule,
        GridModule,
        TooltipModule,
        DateInputsModule
    ],
    exports: [
        HeaderComponent,
        SelectLanguageComponent,
        PhaseHistoryComponent,
        UploadPackageModule,
        DistributionListSectionComponent,
        GridModule,
        TooltipModule,
        DateInputsModule,
        CommonModule,
        BidTranslateModule,
        UploadPackageModule
    ]
})
export class SharedModule {}
