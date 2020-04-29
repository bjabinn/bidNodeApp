import {
    Component,
    OnInit,
    ViewChild,
    Input,
    Output,
    EventEmitter
} from '@angular/core';
import { DataBindingDirective } from '@progress/kendo-angular-grid';
import { process } from '@progress/kendo-data-query';
import { TooltipDirective } from '@progress/kendo-angular-tooltip';

@Component({
    selector: 'bid-table-viewer',
    templateUrl: './table-viewer.component.html',
    styles: []
})
export class TableViewerComponent implements OnInit {
    @ViewChild(DataBindingDirective) dataBinding: DataBindingDirective;
    @ViewChild(TooltipDirective) public tooltipDir: TooltipDirective;
    public distributionList: any[];
    public gridView: any[];
    public deleteName: string;
    public deleteOpen: boolean;

    @Input() active: boolean;
    @Output() closed: EventEmitter<boolean> = new EventEmitter();

    constructor() {
        this.deleteOpen = false;
        this.distributionList = [
            {
                role: 'Division Chief - VPC/VPC',
                name: 'Longinotto, Fabiana',
                added: 'Convergence/PR-200'
            },
            {
                role: 'VPC/VPC',
                name: 'Longinotto, Fabiana',
                added: 'Convergence/PR-200'
            },
            {
                role: 'Division Chief - VPC/VPC',
                name: 'Longinotto, Fabiana',
                added: 'Convergence/PR-200'
            },
            {
                role: 'Division Chief - VPC/VPC',
                name: 'Longinotto, Fabiana',
                added: 'Convergence/PR-200'
            }
        ];
    }

    ngOnInit(): void {
        this.gridView = this.distributionList;
    }

    public onFilter(inputValue: string): void {
        this.gridView = process(this.distributionList, {
            filter: {
                logic: 'or',
                filters: [
                    {
                        field: 'role',
                        operator: 'contains',
                        value: inputValue
                    },
                    {
                        field: 'name',
                        operator: 'contains',
                        value: inputValue
                    },
                    {
                        field: 'added',
                        operator: 'contains',
                        value: inputValue
                    }
                ]
            }
        }).data;

        this.dataBinding.skip = 0;
    }

    public cancelHandler(active: boolean) {
        this.closed.emit(active);
    }

    public saveHandler(active: boolean) {
        this.closed.emit(active);
    }

    public removeHandler({ dataItem }) {
        this.deleteName = dataItem.name;
        this.deleteOpen = true;
    }

    public showTooltip(e: MouseEvent): void {
        const element = e.target as HTMLElement;
        if ((element.nodeName === 'TD' || element.className === 'k-link')
                && element.offsetWidth < element.scrollWidth) {
            this.tooltipDir.toggle(element);
        } else {
            this.tooltipDir.hide();
        }
    }
}
