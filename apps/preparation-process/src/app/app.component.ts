import {
    Component,
    ElementRef,
    Renderer2,
    OnInit,
    OnDestroy
} from '@angular/core';

import { Router, NavigationEnd } from '@angular/router';
import { Observable, of, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { environment } from '@bid/pp/environments/environment';
import { BidTranslateService } from '@bid/bid-translate';
import { TemporalDocumentService } from '@bid/bid-api-service';

@Component({
    selector: 'bid-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit, OnDestroy {
    public expanded = true;
    public embedded = false;
    public isDemo = true;
    public title = 'preparation-process';
    public languages$: Observable<any[]>;
    public langSelected: string;

    public showTimeLine = false;

    private subscription: Subscription;

    constructor(
        private el: ElementRef,
        private renderer: Renderer2,
        private translate: BidTranslateService,
        private tempDocService: TemporalDocumentService,
        private router: Router
    ) {}
    ngOnInit(): void {
        this.renderer.addClass(this.el.nativeElement, 'bid-app');
        this.isDemo = !environment.production;
        this.langSelected = this.translate.getCurrentLang()
            ? this.translate.getCurrentLang()
            : 'en';

        this.translate.changeLanguage(this.langSelected);
        this.setLanguages();
        this.subscription = this.translate
            .onLangChange()
            .subscribe(() => this.setLanguages());

        this.router.events
            .pipe(filter(e => e instanceof NavigationEnd))
            .subscribe(() => {
                if (
                    this.router.url === '' ||
                    this.router.url.indexOf('step-0') > -1
                ) {
                    this.showTimeLine = false;
                } else {
                    this.showTimeLine = true;
                }
            });
    }

    changeLanguage(lang: any) {
        this.langSelected = lang.value;
        this.translate.changeLanguage(lang.value);
    }

    switch(): void {
        this.renderer[this.embedded ? 'addClass' : 'removeClass'](
            this.el.nativeElement,
            'bid-app--embebbed'
        );
        // if(this.embedded) {
        //     this.renderer.addClass(this.el.nativeElement,'bid-app--embebbed');
        // } else {
        //     this.renderer.removeClass(this.el.nativeElement,'bid-app--embebbed');
        // }
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    private setLanguages(): void {
        const elems = [];
        elems.push({
            value: 'en',
            text: this.translate.instant('ENGLISH')
        });
        elems.push({
            value: 'es',
            text: this.translate.instant('SPANISH')
        });

        this.languages$ = of(elems);
    }
}
