import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthenticationService } from './auth/authentication.service';

const ENDPOINT = environment.endpoint;

@Injectable({
  providedIn: 'root'
})
export class JwtHttpInterceptorService implements HttpInterceptor {

  private token;

  constructor(
    private authService: AuthenticationService
  ) {
    this.getToken();
  }

  private getToken() {
    this.token = this.authService.getToken();
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let clone: HttpRequest<any>;
    this.getToken();

    clone = request.clone({
      setHeaders: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    });
    console.log('clone Request', clone);
    console.log('intercept', request.url.includes(ENDPOINT), this.token);

    if(request.url.includes(ENDPOINT) && this.token) {
      clone = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.token}`
        }
      });
    }

    return next.handle(clone).pipe(
      catchError((error: HttpErrorResponse) => {
        if ((error.status === 401 || error.status === 0) && error.url.includes(ENDPOINT)) {
          // this.authService.logout();
          console.log('catchError in itercept: ', error);
        }
        return throwError(error);
      })
    );
  }
}
