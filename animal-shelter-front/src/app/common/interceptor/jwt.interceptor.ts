import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(this.addBearer(request));
  }

  private addBearer(request: HttpRequest<any>): HttpRequest<any> {
    const accessToken = localStorage.getItem('access_token')

    if (!accessToken) {
      return request;
    }

    return request.clone({
      headers: request.headers.set('Authorization', 'Bearer ' + accessToken)
    });
  }
}