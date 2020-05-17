import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment }  from '../../../../environments/environment';
import { Observable } from 'rxjs';

const HttpUploadOptions = {
  headers: new HttpHeaders({ "Content-Type": "multipart/form-data" })
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  _baseUrl: string = environment.api_host;
   token: string = localStorage.getItem('uniToken');

  constructor(private _httpClient: HttpClient) { }


  private loggedInStatus = localStorage.getItem("status");

 loginUser(data: any ): Observable<any>{
   return this._httpClient.post(`http://localhost:3000/users/login`, data);
 }

 registerUser(data: any ): Observable<any>{
   return this._httpClient.post(`http://localhost:3000/users/`, data);
 }

 setUserDetails(authData: any){
   localStorage.setItem("uniToken", authData.token);
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


public saveDetails = (data: any) => {

 return this._httpClient.post<any>( `${this._baseUrl}/user/applicantDetails/`,  data);

}



}
