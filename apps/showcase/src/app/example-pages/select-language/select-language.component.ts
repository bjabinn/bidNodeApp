import { Component, OnInit } from '@angular/core';
interface Language {
    code: string,
    title: string,
    language: string
}
@Component({
    selector: 'bid-select-language',
    templateUrl: './select-language.component.html'
})
export class SelectLanguageComponent implements OnInit {
    public opened: boolean;
    public selectedLanguage: string;
    public languages: Language[];
    constructor() {
        this.close();
        this.languages = [
            {
                code: 'ESP',
                title: 'Spanish',
                language: 'ESPANISH'
            },
            {
                code: 'ENG',
                title: 'English',
                language: 'ENGLISH'
            },
            {
                code: 'POR',
                title: 'Portuguese',
                language: 'PORTUGUESE'
            },
            {
                code: 'FRA',
                title: 'French',
                language: 'FRENCH'
            }
        ]
    }

    ngOnInit(): void {
    }
    close(message?: string) {
        this.opened = false;
        message && console.log(message);
    }
    open() {
        this.opened = true;
    }
    selectLanguage(event: Event, message: Language ) {
        event.preventDefault();
        this.selectedLanguage = message.language;
    }

}
