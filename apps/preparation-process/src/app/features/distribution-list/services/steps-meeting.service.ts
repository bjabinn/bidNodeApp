import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '@bid/pp/environments/environment';

import { DistributionListMember } from '@bid/bid-api-service';

@Injectable({
    providedIn: 'root'
})
export class StepsMeetingService {
    private httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            Authorization: 'my-auth-token'
        })
    };

    constructor(private http: HttpClient) {}

    public postMeetingsMeetingId(meetingId, memberList): Observable<any> {
        const paramsBody = memberList;
        return this.http.post<any>(
            `${environment.middlewareUrl}/meetings/${meetingId}/distribution-list-members`,
            paramsBody,
            this.httpOptions
        );
    }

    public deleteMeetingsMeetingId(meetingId, memberId): Observable<any> {
        return this.http.delete<any>(
            `${environment.middlewareUrl}/meetings/${meetingId}/distribution-list-members/${memberId}`,
            this.httpOptions
        );
    }

    public search(value: string): Observable<DistributionListMember[]> {
        return this.http
            .get<DistributionListMember[]>('/assets/distribution_search.json')
            .pipe(
                map(list =>
                    list.filter(member =>
                        member.memberId
                            .toLocaleLowerCase()
                            .includes(value.toLowerCase())
                    )
                )
            );
    }
}
