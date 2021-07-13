import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class UserInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    httpRequest: HttpRequest<'GET'>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const Authorization = 'This is Auth Header';

    return next
      .handle(httpRequest.clone({ setHeaders: { Authorization } }))
      .pipe(
        map((response: any) => {
          console.log('FROM INTERCEPTOR', response);
          return response;
        })
      );
  }
}
