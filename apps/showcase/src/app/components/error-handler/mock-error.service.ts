import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MockErrorService {

  constructor(private http: HttpClient) { }

  public getInternalErrorUnknow(){
    return this.http.get('https://httpstat.us/500');
  }

  public getInternalErrorKnow(){
    return this.http.get('https://httpstat.us/501');
  }

}
