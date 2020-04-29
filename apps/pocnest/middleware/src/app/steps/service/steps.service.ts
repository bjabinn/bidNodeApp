import { Injectable, HttpService } from '@nestjs/common';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { StepResponse, Step, StepMapper } from '@bid/bid-api-service';
import { AxiosResponse } from 'axios';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class StepsService {
    private apiUrl = environment.apiUrl;

    constructor(private http: HttpService) {}

    getStepInfo(operationNumber: string, id: string): Observable<Step> {
        //DELETE THIS RETURN WHEN BACK ENABLE OPERATION NUMBER
        return this.http
            .get(`${this.apiUrl}/steps/${id}`)
            .pipe(
                map((stepResponse: AxiosResponse<StepResponse>) =>
                    StepMapper.mapToModel(stepResponse.data)
                )
            );

        return this.http
            .get(`${this.apiUrl}operations/${operationNumber}/steps/${id}`)
            .pipe(
                map((stepResponse: AxiosResponse<StepResponse>) =>
                    StepMapper.mapToModel(stepResponse.data)
                )
            );
    }

    moveNextStep(
        operationNumber: string,
        stepId: string,
        step: Step
    ): Observable<any> {
        const paramsBody = step;
        //DELETE THIS RETURN WHEN BACK ENABLE OPERATION NUMBER
        return this.http
            .post<Step>(`${this.apiUrl}/steps/${stepId}/move-next`, paramsBody)
            .pipe(map(response => response.status));

        return this.http
            .post<Step>(
                `${this.apiUrl}operations/${operationNumber}/steps/${stepId}/move-next`,
                paramsBody
            )
            .pipe(map(response => response.status));
    }

    returnStep(
        operationNumber: string,
        stepId: string,
        step: Step
    ): Observable<any> {
        const paramsBody = step;
        //DELETE THIS RETURN WHEN BACK ENABLE OPERATION NUMBER
        return this.http
            .post<Step>(`${this.apiUrl}/steps/${stepId}/return`, paramsBody)
            .pipe(map(response => response.status));
        return this.http
            .post<Step>(
                `${this.apiUrl}operations/${operationNumber}/steps/${stepId}/return`,
                paramsBody
            )
            .pipe(map(response => response.status));
    }
}
