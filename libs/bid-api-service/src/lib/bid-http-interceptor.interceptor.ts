import {
    NotificationGlobalService,
    LoggingService
} from '@bid/bid-handle-errors';
import { HttpError } from './models/http-error';
import { Injectable, Injector } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpErrorResponse,
    HttpResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';
import { BidStorageService } from '@bid/bid-utils';

@Injectable()
export class BidHttpInterceptor implements HttpInterceptor {
    constructor(
        private _injector: Injector,
        private bidStorageSvc: BidStorageService
    ) {}

    intercept(
        request: HttpRequest<unknown>,
        next: HttpHandler
    ): Observable<HttpEvent<unknown>> {
        const notification: NotificationGlobalService = this._injector.get(
            NotificationGlobalService
        );
        const logger: LoggingService = this._injector.get(LoggingService);

        //Recuperamos el tocken y añadimos a la cabecera
        const token: string = this.bidStorageSvc.get('token');

        if (token) {
            request = request.clone({
                headers: request.headers.set('Authorization', 'Bearer ' + token)
            });
        }
        //Si no tenemos content-type añadimos por defecto application/json
        if (!request.headers.has('Content-Type')) {
            //request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
        }

        //Clonamo
        request = request.clone({
            headers: request.headers.set('Accept', 'application/json')
        });

        return next.handle(request).pipe(
            map((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    logger.logHttpInfo(
                        event.url,
                        event.headers,
                        event.body,
                        event.status
                    );
                    // this.errorDialogService.openDialog(event);
                }
                return event;
            }),
            retry(1),
            catchError((error: HttpErrorResponse) => {
                logger.logHttpError(error);
                switch (error.status) {
                    case HttpError.BadRequest:
                        notification.showErrorUndefined();
                        break;
                    case HttpError.Unauthorized:
                        notification.showErrorPermission();
                        break;
                    case HttpError.NotFound:
                        notification.showErrorNotFound();
                        break;
                    case HttpError.TimeOut:
                        notification.showErrorNotFound();
                        break;
                    case HttpError.Forbidden:
                        notification.showErrorTimeout();
                        break;
                    case HttpError.InternalServerError:
                        //Error 500: Si tenemos un mensaje de error mostramos dicho mensajes, en caso contrario un mensaje genérico
                        if (
                            error.error &&
                            error.error.bidcode &&
                            error.error.message
                        ) {
                            notification.showError(
                                error.error.message +
                                    '(' +
                                    error.error.bidcode +
                                    ')'
                            );
                        } else {
                            notification.showErrorUndefined();
                        }
                        break;
                    case HttpError.InternalServerErrorKnow:
                        //Error 500: Si tenemos un mensaje de error mostramos dicho mensajes, en caso contrario un mensaje genérico
                        const errorMock = {
                            bidcode: 'BID5051',
                            message:
                                'El proceso ejecutado se encuentra actualmente bloqueado'
                        };
                        notification.showError(
                            errorMock.message + '  (' + errorMock.bidcode + ')'
                        );
                        break;
                    default: {
                        notification.showErrorUndefined();
                    }
                }
                return throwError(error);
            })
        );
    }
}
