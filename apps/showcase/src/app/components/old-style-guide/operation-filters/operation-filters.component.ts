import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'bid-operation-filters',
    templateUrl: './operation-filters.component.html',
    styles: [`
    .collapsed { display: none; }
    .collapse { display: block;}
        `]
})
export class OperationFiltersComponent implements OnInit {
    public classMoreFliters: string = 'collapsed';
    public isOpenMoreFliters: boolean = false;

    constructor() { }

    ngOnInit(): void {
    }
    handleClick(event: Event): void {
        event.preventDefault();
        event.stopPropagation();
        this.classMoreFliters = this.isOpenMoreFliters ? 'collapsed' : 'collapse';
        this.isOpenMoreFliters = !this.isOpenMoreFliters;
    }

}
