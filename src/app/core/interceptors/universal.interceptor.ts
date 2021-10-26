import { Inject, Injectable, Optional } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
/**Handle request khi render bang server */
export class UniversalInterceptor implements HttpInterceptor {

  constructor(@Optional() @Inject('APP_BASE_HREF') protected serverUrl: string) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log(`UniversalInterceptor`, {
      'request.url': request.url,
      APP_BASE_HREF: this.serverUrl
    });
    const newRequest = !this.serverUrl ? request : request.clone({
      url: `${this.serverUrl}${request.url}`
    });

    return next.handle(newRequest);
  }
}
