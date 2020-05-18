import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment} from '../../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private _baseUrl :String = environment.api_host;


  constructor( private _httpClient: HttpClient) { }


   
  public fetchDashboard(): Observable<any>{
    return this._httpClient.get(`${this._baseUrl}/dashboard`)
  }
}
