import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment }  from '../../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  _baseUrl: string = environment.api_host;

  constructor(private _httpClient: HttpClient) { }


  private loggedInStatus = localStorage.getItem("status");

 loginUser(data: any ): Observable<any>{
   return this._httpClient.post(`${this._baseUrl}/users/login/`, data);
 }

 setUserDetails(authData: any){
   localStorage.setItem("propToken", authData.token);
   localStorage.setItem("username", authData.username);
   localStorage.setItem("userId", authData.userId)
   localStorage.setItem("role", authData.role);
   localStorage.setItem("status", "active" )
 }

 logUserOut(){

   try{

     localStorage.clear()
     return true;
   }catch(err){
     throw err;
   }
 }

 public get isLoggedIn(){
   return this.loggedInStatus;
 }



}
