import {
    Component,
    OnInit,
    ViewChild,
    Input,
    Output,
    EventEmitter
} from '@angular/core';
import { DataBindingDirective } from '@progress/kendo-angular-grid';
import {
    process,
    CompositeFilterDescriptor,
    filterBy
} from '@progress/kendo-data-query';
import { TooltipDirective } from '@progress/kendo-angular-tooltip';

import { StateProcessService } from '@bid/bid-api-service';

import * as lodash from 'lodash';

const flatten = filter => {
    const filters = filter.filters;
    if (filters) {
        return filters.reduce(
            (acc, curr) => acc.concat(curr.filters ? flatten(curr) : [curr]),
            []
        );
    }
    return [];
};

@Component({
    selector: 'bid-phase-history',
    templateUrl: './phase-history.component.html',
    styles: []
})
export class PhaseHistoryComponent implements OnInit {
    @ViewChild(DataBindingDirective) dataBinding: DataBindingDirective;
    @ViewChild(TooltipDirective) public tooltipDir: TooltipDirective;

    @Input() addActive: boolean;
    @Input() phaseData: any[];
    @Output() closed: EventEmitter<void> = new EventEmitter();

    public filter: CompositeFilterDescriptor;

    public gridView: any[];
    public data: any[];
    public dateRange = { start: null, end: null };

    constructor(private stateProcessService: StateProcessService) {}

    ngOnInit(): void {
        this.gridView = this.phaseData;
    }

    public onFilter(
        inputValue: string,
        field: string,
        comparator?: string
    ): void {
        this.gridView = process(this.data, {
            filter: {
                logic: 'or',
                filters: [
                    {
                        field: field,
                        operator: comparator ? comparator : 'contains',
                        value: inputValue
                    }
                ]
            }
        }).data;

        this.dataBinding.skip = 0;
    }

    public onFilterDate(
        inputStartValue: Date,
        inputEndValue: Date,
        comparator: string
    ): void {
        const filter: CompositeFilterDescriptor = {
            logic: 'and',
            filters: []
        };
        if (inputStartValue) {
            filter.filters.push({
                field: 'date',
                operator: 'gte',
                value: inputStartValue
            });
        }
        if (inputEndValue) {
            filter.filters.push({
                field: 'date',
                operator: 'lt',
                value: inputEndValue
            });
        }
        this.gridView = process(this.data, {
            filter: filter
        }).data;

        this.dataBinding.skip = 0;
    }

    public closeHandler(): void {
        this.closed.emit();
    }

    resetFilters(): void {
        this.gridView = this.data;
    }

    public showTooltip(e: MouseEvent): void {
        const element = e.target as HTMLElement;
        if (
            (element.nodeName === 'TD' || element.className === 'k-link') &&
            element.offsetWidth < element.scrollWidth
        ) {
            this.tooltipDir.toggle(element);
        } else {
            this.tooltipDir.hide();
        }
    }
}
