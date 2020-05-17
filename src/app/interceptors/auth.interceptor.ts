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
           
            catchError((err: any) => {
                
                if(err instanceof HttpErrorResponse) {

                    switch(err.status){

                        case 417:
                            this._toastr.info("Authentication invalid", err.error.message+"  🥺", {  timeOut:5000});

                        case 403:
                            this._toastr.error("Authentication invalid", "Unexpected Error  🥺", {  timeOut:5000});
                            this._router.navigate(['/login']);

                        case 400:
                        case 402:
                        case 401:
                        case 404:    
                            this._toastr.info( err.error.error+"  🥺", "Aw Snap!", {  timeOut:5000});



                    }
                
                    // if(err.status == 417){
                    //     this._toastr.info("Authentication invalid", err.error.message+"  🥺", {  timeOut:5000});
                    // }
                    
                    // if(err.status == 403){
                    //     this._toastr.info("Authentication invalid", "Unexpected Error  🥺", {  timeOut:5000});
                    //     this._router.navigate(['/login']);
                    // }

                    // if(err.status == 403){
                    //     this._toastr.info("Authentication invalid", "Unexpected Error  🥺", {  timeOut:5000});
                    //     this._router.navigate(['/login']);
                    // }
                  
                }
                return of(err);
            }));
    
      }
      
}