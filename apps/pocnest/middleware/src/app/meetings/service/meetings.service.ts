import { Injectable, HttpService } from '@nestjs/common';
import { environment } from '../../../environments/environment';
import { DistributionListMember } from '@bid/bid-api-service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class MeetingsService {
    private apiUrl = environment.apiUrl;

    constructor(private http: HttpService) {}

    addDLMember(
        operationNumber: string,
        memberId: string,
        dlMember: DistributionListMember[]
    ): Observable<any> {
        const paramsBody = dlMember;
        //DELETE THIS RETURN WHEN BACK ENABLE OPERATION NUMBER
        return this.http
            .post(
                `${this.apiUrl}/meetings/${memberId}/distribution-list-members`,
                paramsBody
            )
            .pipe(map(response => response.status));

        return this.http
            .post(
                `${this.apiUrl}operations/${operationNumber}/meetings/${memberId}/distribution-list-members`,
                paramsBody
            )
            .pipe(map(response => response.status));
    }
    deleteMember(
        operationNumber: string,
        meetingId: string,
        memberId: string
    ): Observable<any> {
        //DELETE THIS RETURN WHEN BACK ENABLE OPERATION NUMBER
        return this.http
            .delete(
                `${this.apiUrl}/meetings/${meetingId}/distribution-list-members/${memberId}`
            )
            .pipe(map(response => response.status));

        return this.http
            .delete(
                `${this.apiUrl}operations/${operationNumber}/meetings/${meetingId}/distribution-list-members/${memberId}`
            )
            .pipe(map(response => response.status));
    }
}
