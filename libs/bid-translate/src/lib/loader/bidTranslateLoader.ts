import { Injectable } from '@angular/core';
import { BidStorageService } from '@bid/bid-utils';
import { TranslateLoader } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BidTranslateLoader implements TranslateLoader {
    constructor(private storageService: BidStorageService) {}

    getTranslation(lang: string): Observable<any> {
        return of(this.storageService.get(lang));
    }
}
