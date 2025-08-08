import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        let type: 'server' | 'client' | 'maintenance' = 'server';

        if (error.status >= 500) {
          type = 'server';
        } else if (error.status >= 400) {
          type = 'client';
        }

        if (error.status === 503) {
          type = 'maintenance';
        }

        this.router.navigate(['/error'], {
          state: { type, statusCode: error.status }, 
        });

        return throwError(() => error);
      })
    );
  }
}
