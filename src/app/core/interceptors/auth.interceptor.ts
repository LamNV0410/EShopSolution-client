import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private _authService: AuthService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const authToken = this._authService.getToken();
    // console.log(`AuthInterceptor`, request.url);
    // Clone the request and replace the original headers with
    // cloned headers, updated with the authorization.
    const newRequest = request.clone({
      headers: request.headers.set('Authorization', authToken ?? '')
    });


    return next.handle(newRequest);
  }
}
