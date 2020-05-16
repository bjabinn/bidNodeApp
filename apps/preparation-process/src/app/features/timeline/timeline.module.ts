import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineComponent } from './components/timeline/timeline.component';
import { TranslateModule } from '@ngx-translate/core';

//kendo
import { PanelBarModule } from '@progress/kendo-angular-layout';

@NgModule({
    declarations: [TimelineComponent],
    imports: [
        CommonModule,
        PanelBarModule,
        TranslateModule.forChild()
    ],
    exports: [TimelineComponent]
})
export class TimelineModule {}
