import { Component, OnInit, Input, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'bid-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
    expanded: boolean = true;
    embedded: boolean = false;
    title: string;
    pageItems: { name: string; path: string; icon: string; }[];
    componentsItems: { name: string; path: string; icon: string; }[];
    constructor(private el: ElementRef, private renderer: Renderer2){
        this.renderer.addClass(this.el.nativeElement,'bid-app');
    }
    ngOnInit(): void {
        this.title = 'Showcase';
        this.componentsItems = [
        {
            icon: 'fad fa-network-wired',
            name: 'API Demo',
            path: 'api-demo'
        },
        {
            icon: 'fad fa-exclamation-triangle',
            name: 'Error handler & notifications',
            path: 'error-handler'
        },
        {
            icon: 'fad fa-book',
            name: 'Old Style guide',
            path: 'old-style-guide'
        }
        ];

        this.pageItems = [
        {
            icon: 'fas fa-file',
            name: 'Select language',
            path: '/select-language'
        }
        ];
    }
    switch():void {
        this.renderer[this.embedded ? 'addClass': 'removeClass'](this.el.nativeElement,'bid-app--embebbed');
        // if(this.embedded) {
        //     this.renderer.addClass(this.el.nativeElement,'bid-app--embebbed');
        // } else {
        //     this.renderer.removeClass(this.el.nativeElement,'bid-app--embebbed');
        // }
    }
}


