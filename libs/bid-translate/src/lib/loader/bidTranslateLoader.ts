import { Injectable } from '@angular/core';
import { BidStorageService } from '@bid/bid-utils';
import { BidTranslateService } from '@bid/bid-translate';
import { TranslateLoader } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class BidTranslateLoader implements TranslateLoader {
    constructor(private storageService: BidStorageService) {}

    getTranslation(lang: string): Observable<any> {
        return of(this.storageService.get(lang));
    }
}
