// import { Injectable } from '@angular/core';
// import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
// import { Observable, from } from 'rxjs';
// import { switchMap } from 'rxjs/operators';
// import { AuthService } from '../services/auth.service';
// import { StorageService } from '../services/storage.service';

// @Injectable()
// export class AuthInterceptor implements HttpInterceptor {
//   constructor(private authService: AuthService, private storage: StorageService) {}

// intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//   const isApiUrl = req.url.startsWith('https://login-demo.blip-backend.com'); 

//   return from(this.authService.ensureValidToken()).pipe(
//     switchMap((token) => {
//       if (token && isApiUrl) {
//         req = req.clone({
//           setHeaders: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//       }
//       return next.handle(req);
//     })
//   );
// }

// }
