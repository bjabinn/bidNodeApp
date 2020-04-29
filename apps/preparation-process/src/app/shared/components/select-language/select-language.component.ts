import {
    Component,
    OnInit,
    Input,
    Output,
    EventEmitter,
    OnChanges,
    SimpleChange,
    OnDestroy
} from '@angular/core';
import { LanguageModel } from '@bid/bid-api-service';
import { BidTranslateService } from '@bid/bid-translate';

import { Subscription } from 'rxjs';

@Component({
    selector: 'bid-select-language',
    templateUrl: './select-language.component.html',
    styles: []
})
export class SelectLanguageComponent implements OnInit, OnChanges, OnDestroy {
    @Input() selected: string;
    @Input() languages: string[];
    @Input() readonly: boolean;
    @Output() langSelect = new EventEmitter<string>();

    public languageModelList: LanguageModel[] = [];
    private allLanguages: LanguageModel[];
    private subscription: Subscription;

    constructor(private translate: BidTranslateService) {
        const lang_es: LanguageModel = new LanguageModel();
        lang_es.id = 'es';
        lang_es.code = 'ESP';
        lang_es.name = this.translate.instant('PPR_LANGUAGES_ES');
        lang_es.selected = false;

        const lang_en: LanguageModel = new LanguageModel();
        lang_en.id = 'en';
        lang_en.code = 'ENG';
        lang_en.name = this.translate.instant('PPR_LANGUAGES_EN');
        lang_en.selected = false;

        const lang_pt: LanguageModel = new LanguageModel();
        lang_pt.id = 'pt';
        lang_pt.code = 'POR';
        lang_pt.name = this.translate.instant('PPR_LANGUAGES_PT');
        lang_pt.selected = false;

        const lang_fr: LanguageModel = new LanguageModel();
        lang_fr.id = 'fr';
        lang_fr.code = 'FRA';
        lang_fr.name = this.translate.instant('PPR_LANGUAGES_FR');
        lang_fr.selected = false;

        this.allLanguages = [lang_es, lang_en, lang_pt, lang_fr];
        this.subscription = this.translate.onLangChange().subscribe(() => {
            const langs = {};

            langs['en'] = this.translate.instant('PPR_LANGUAGES_EN');
            langs['es'] = this.translate.instant('PPR_LANGUAGES_ES');
            langs['fr'] = this.translate.instant('PPR_LANGUAGES_FR');
            langs['pt'] = this.translate.instant('PPR_LANGUAGES_PT');

            Object.keys(langs).forEach(key => {
                this.allLanguages.filter(elem => elem.id === key).pop().name =
                    langs[key];
            });
        });
    }

    ngOnInit(): void {
        this.languageModelList = this.allLanguages.filter(
            elem => this.languages.indexOf(elem.id) !== -1
        );
    }
    ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
        if (
            changes.selected &&
            !changes.selected.firstChange &&
            changes.selected.currentValue !== changes.selected.previousValue
        ) {
            const newSelected = changes.selected.currentValue;
            this.languageModelList.forEach(
                lang => (lang.selected = lang.id === newSelected.toLowerCase())
            );
        }
    }

    selectLanguage(event: boolean, language: LanguageModel) {
        language.selected = event;
        if (event) this.langSelect.emit(language.id);
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
