import { HttpErrorHandleInterceptor } from './http-error-handle.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthInterceptor } from './auth.interceptor';

/** Tập hợp tất cả Http interceptor theo thứ tự */
export const coreInterceptors = [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorHandleInterceptor, multi: true }
];