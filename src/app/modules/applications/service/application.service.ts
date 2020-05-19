import { Injectable } from '@angular/core';
import {environment} from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {
  private _baseUrl :String = environment.api_host;
  constructor(private _httpClient: HttpClient) { }


  updateApplication(res: any ): Observable<any>{
    return this._httpClient.patch(`${this._baseUrl}/application/${res.id}`, res.data);
   }

}
