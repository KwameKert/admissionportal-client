import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse, HttpErrorResponse }   from '@angular/common/http';
import { Injectable } from "@angular/core"
import { Observable, of } from "rxjs";
import { tap, catchError } from "rxjs/operators";
import { ToastrService } from 'ngx-toastr';
import {Router} from '@angular/router';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(public _toastr: ToastrService, private _router: Router) {}
intercept(
        req: HttpRequest<any>,
        next: HttpHandler
      ): Observable<HttpEvent<any>> {
    
        return next.handle(req).pipe(
            tap(evt => {
                if (evt instanceof HttpResponse) {
                 
                    if(evt.body && evt.body.status == 200){
                        this._toastr.success(evt.body.message, "Success  😊", {  timeOut:2000});
                    }

                    if(evt.body && evt.body.status == 417){
                        this._toastr.info(evt.body.message, "Unexpected Error  🥺", {  timeOut:5000});
                    }

                       
                }
            }),
            catchError((err: any) => {
                if(err instanceof HttpErrorResponse) {
                    console.log(err);
                    try {
                        this._toastr.error(err.error.message, "Oops 🥺", {  timeOut:4000});

                     
                    } catch(e) {
                        this._toastr.error('An error occurred', '', {   timeOut:4000 });
                    }
                    
                    if(err.status == 403){
                        this._router.navigate(['/login']);
                    }
                }
                return of(err);
            }));
    
      }
      
}