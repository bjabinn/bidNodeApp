import { TvDemoService } from '@bid/bid-api-service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'bid-api-demo',
    templateUrl: './api-demo.component.html',
    styleUrls: ['./api-demo.component.scss']
})
export class ApiDemoComponent implements OnInit {
    public series: any[] = [];
    public serie: any;
    public query: string;

    constructor(private tvService: TvDemoService) {
        this.query = 'papel';
    }

    ngOnInit(): void {
        this.search();
    }
    search(): void {
        this.tvService.search(this.query).subscribe(data => {
            this.series = data;
            console.log(this.series);
        });
    }

    getErrorNotFound(): void {
        this.tvService
            .getShow(100000000)
            .subscribe(data => (this.serie = data));
    }
}
