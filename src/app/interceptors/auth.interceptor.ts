import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthHelper } from '../services/helpers/auth-helper.service';
import { tap } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private authHelper: AuthHelper
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authToken = this.authHelper.getToken();

    console.log("token: " + authToken);

    const authReq = request.clone({
      headers: request.headers.set('Authorization', authToken)
    });
    

    return next.handle(authReq).pipe(
      tap({
        error: error => {
          if(error instanceof HttpErrorResponse && error.status == 401){
            this.failToken();
          }
        }
      })
    );
  }

  public failToken() {
    this.authHelper.failToken();
  }
}
