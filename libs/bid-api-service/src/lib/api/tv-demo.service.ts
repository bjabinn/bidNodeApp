import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class TvDemoService {
    private urlAPI = 'http://api.tvmaze.com/';

    constructor(private http: HttpClient) {}

    public search(query): Observable<any[]> {
        return this.http.get<any[]>(this.urlAPI + 'search/shows?q=' + query);
    }

    public getShow(id: number): Observable<any> {
        return this.http.get<any>(this.urlAPI + 'shows/' + id);
    }
}
