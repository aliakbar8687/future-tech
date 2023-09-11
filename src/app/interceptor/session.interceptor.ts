import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, finalize, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class SessionInterceptor implements HttpInterceptor {

  constructor(
    private router: Router,
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
      .pipe(
        finalize(() => console.log('finalize')),
        catchError((err: HttpErrorResponse) => {
          if (err.status === 401) {
            this.router.navigate(['/login']);
          }
          return throwError({msg: err.error.message})
        })
      );
  }
}
