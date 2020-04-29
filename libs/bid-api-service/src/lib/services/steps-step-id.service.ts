import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
// Model import

@Injectable()
export class AppStepsStepIdService {
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

    constructor(private http: HttpClient, @Inject('env') private env) {}

    /**
     * @description Find step by ID
     * @return {Observable<any>}
     * @param step-id
     */
    getStepsStepId(stepId): Observable<any> {
        console.log('URL', `${this.env.stepsUrl}/steps/${stepId}`);
        return this.http.get<any>(
            `${this.env.stepsUrl}/steps/${stepId}`,
            this.httpOptions
        );
    }

    /**
     * @description Post a step
     * @return {Observable<any>}
     * @param step-id
     * @param step
     */
    postStepsStepId(stepId, step): Observable<any> {
        const paramsBody = step;
        return this.http.post<any>(
            `${this.env.stepsUrl}/steps/${stepId}/move-next`,
            paramsBody,
            this.httpOptions
        );
    }
}
