import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpResponse,
    HttpHandler,
    HttpEvent,
    HttpErrorResponse
} from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

import { Observable, throwError } from 'rxjs';
import {tap, map, catchError } from 'rxjs/operators';


@Injectable() export class TokenInterceptor implements HttpInterceptor {

    constructor(private _toastr: ToastrService){}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {


        if(!request.headers.has("Authorization")){

            const token: string = localStorage.getItem('uniToken');

            if (token) {
                request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });
            }
            if (!request.headers.has('Content-Type')) {
                request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
            }
    
            request = request.clone({ headers: request.headers.set('Accept', 'application/json') });
        }

        return next.handle(request);
       
   

      //  return next.handle(request);
    }


 }

 