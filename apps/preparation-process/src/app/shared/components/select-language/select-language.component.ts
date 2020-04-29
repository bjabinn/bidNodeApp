import {
    Component,
    OnInit,
    Input,
    Output,
    EventEmitter,
    OnChanges,
    SimpleChange
} from '@angular/core';
import { LanguageModel } from '@bid/bid-api-service';

@Component({
    selector: 'bid-select-language',
    templateUrl: './select-language.component.html',
    styles: []
})
export class SelectLanguageComponent implements OnInit, OnChanges {
    @Input() selected: string;
    @Input() languages: string[];
    @Input() readonly: boolean;
    @Output() langSelect = new EventEmitter<string>();

    public languageModelList: LanguageModel[] = [];

    constructor() {}

    ngOnInit(): void {
        this.initLanguages();
    }
    ngOnChanges(changes: { [propKey: string]: SimpleChange }): void {
        this.changeInputSelected(changes.selected);
    }

    public selectLanguage(event: boolean, language: LanguageModel): void {
        language.selected = event;
        if (event) this.langSelect.emit(language.id);
    }

    private initLanguages(): void {
        const langEs: LanguageModel = new LanguageModel();
        langEs.id = 'es';
        langEs.code = 'ESP';
        langEs.name = 'SPANISH';
        langEs.selected = false;

        const langEn: LanguageModel = new LanguageModel();
        langEn.id = 'en';
        langEn.code = 'ENG';
        langEn.name = 'ENGLISH';
        langEn.selected = false;

        const langPt: LanguageModel = new LanguageModel();
        langPt.id = 'pt';
        langPt.code = 'POR';
        langPt.name = 'PORTUGUESE';
        langPt.selected = false;

        const langFr: LanguageModel = new LanguageModel();
        langFr.id = 'fr';
        langFr.code = 'FRA';
        langFr.name = 'FRENCH';
        langFr.selected = false;

        const allLanguages: LanguageModel[] = [langEs, langEn, langPt, langFr];

        this.languageModelList = allLanguages.filter(
            elem => this.languages.indexOf(elem.id) !== -1
        );
    }

    private changeInputSelected(selected: SimpleChange): void {
        if (
            !selected.firstChange &&
            selected.currentValue !== selected.previousValue
        ) {
            const newSelected = selected.currentValue;
            this.languageModelList.forEach(
                lang => (lang.selected = lang.id === newSelected.toLowerCase())
            );
        }
    }
}
