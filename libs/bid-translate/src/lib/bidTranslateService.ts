import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BidStorageService } from '@bid/bid-utils';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class BidTranslateService {
    private readonly SELECTLANG = 'selectLang';

    constructor(
        private http: HttpClient,
        private storageService: BidStorageService,
        private translate: TranslateService,
        @Inject('env') private env
    ) {}

    init(): Promise<void> {
        if (!this.storageService.check(this.SELECTLANG))
            this.storageService.set(this.SELECTLANG, this.env.defaultLang);

        const lang = this.storageService.get(this.SELECTLANG);

        return new Promise<void>(resolve => {
            if (this.storageService.check(lang)) {
                this.translate.use(lang);
                resolve();
            } else
                this.loadLanguage(lang).subscribe(() => {
                    this.translate.use(lang);
                    resolve();
                });
        });
    }

    changeLanguage(lang: string): void {
        this.storageService.set(this.SELECTLANG, lang);
        /*if (!this.storageService.check(lang)) {
            this.loadLanguage(lang).subscribe(() => this.translate.use(lang));
        } else this.translate.use(lang);*/
        this.translate.use(lang);
    }

    onLangChange(): Observable<any> {
        return this.translate.onLangChange;
    }

    getCurrentLang(): string {
        return this.storageService.get(this.SELECTLANG);
    }

    instant(key: string): string {
        return this.translate.instant(key);
    }

    private loadLanguage(lang: string): Observable<any> {
        return this.http
            .get(`${this.env.translateUrl}/${lang}`)
            .pipe(
                tap(translation => this.storageService.set(lang, translation))
            );
    }
}
