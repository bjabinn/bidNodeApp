import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  logError(message: string, stack: string) {    
    console.log('LoggingService: ' + message);
  }

  logInfo(message: string) {    
    //TODO: Call to tracker
  }

  logDebug(message: string,) {    
    //TODO: Call to tracker
  }

  logHttpInfo(url, headers, body, status) {
    //console.log('Http Info: url = ' + url + '; headers = ' + headers +'; status = ' + status + ' Response ' + body);
    //TODO: Call to tracker
  }

  logHttpError(error: HttpErrorResponse) {
    //console.log('HttpError ' + error.status + ': ' + error.message);
    //TODO: Call to tracker
  }

}
