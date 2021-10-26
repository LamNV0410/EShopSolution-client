import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable()
export class HttpErrorHandleInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request)
      .pipe(
        tap(() => {

        }),
        catchError(this.handleError));
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError(error: HttpErrorResponse) {
    // console.warn(`handleError HttpErrorHandleInterceptor receive request.url`, {
    //   url: error.url,
    //   status: error.status
    // });
    // TODO: send the error to remote logging infrastructure
    // console.error(`HttpInterceptor handleError`, error); // log to console instead
    // TODO: better job of transforming error for user consumption
    // Let the app keep running by returning an empty result.
    if (error instanceof HttpErrorResponse) {
      if (error.status === 401) {
        console.log('401 this should print your error!', error.error);
      }
      else if (error.status === 404) {
        console.log('404 this should print your error!', error.error);
      }
    }

    return throwError(error);
  }
}
