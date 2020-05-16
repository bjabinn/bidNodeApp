import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '@bid/pp/environments/environment';
import { Step } from '@bid/bid-api-service';
import { map } from 'rxjs/operators';

// Model import

@Injectable({ providedIn: 'root' })
export class AppStepsStepIdService {
    operationNumber: 'Mocknumber';
    // Http Headers <Add your own config>

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            Authorization: 'my-auth-token'
        })
    };
    /**
     * @constructs
     * @param {HttpClient} http
     */

    constructor(private http: HttpClient) {}

    /**
     * @description Find step by ID
     * @return {Observable<Step>}
     * @param step-id
     */
    getStep(stepId: string): Observable<Step> {
        return this.http.get<any>(
            `${environment.middlewareUrl}/operations/${this.operationNumber}/steps/${stepId}`,
            this.httpOptions
        );
    }

    /**
     * @description Post a step
     * @return {Observable<string>}
     * @param step-id
     * @param step
     */
    nextMove(stepId: string, step: Step): Observable<string> {
        const paramsBody = step;
        return this.http
            .post(
                `${environment.middlewareUrl}/operations/${this.operationNumber}/steps/${stepId}/move-next`,
                paramsBody,
                this.httpOptions
            )
            .pipe(map((res: string) => res));
    }

    /**
     * @description Return to a step
     * @return {Observable<string>}
     * @param step-id
     * @param step
     */
    return(stepId: string, step: Step): Observable<string> {
        const paramsBody = step;
        return this.http
            .post(
                `${environment.middlewareUrl}/operations/${this.operationNumber}/steps/${stepId}/return`,
                paramsBody,
                this.httpOptions
            )
            .pipe(map((res: string) => res));
    }
}
