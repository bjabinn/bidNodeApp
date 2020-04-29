import { Injectable, HttpService } from '@nestjs/common';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MemberInfo, MemberMapper, IMemberInfo } from '@bid/bid-api-service';
import { AxiosResponse } from 'axios';
@Injectable()
export class UsersService {
    private apiUrl = environment.apiUrl;

    constructor(private http: HttpService) {}

    searchUser(criteria: string): Observable<MemberInfo[]> {
        return this.http
            .get<IMemberInfo[]>(`${this.apiUrl}/organization/users/${criteria}`)
            .pipe(
                map((usersResponse: AxiosResponse<IMemberInfo[]>) =>
                    MemberMapper.mapToModel(usersResponse.data)
                )
            );
    }
}
