import { Injectable } from '@angular/core';
import { environment} from '../../../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private clientId: string = environment.image_client_id;
  private url: string = 'https://api.imgur.com/3/image';

  constructor(private _httpClient: HttpClient) { }


  public uploadImage(data: any): Observable<any>{
    let header = new HttpHeaders({
      "authorization": 'Client-ID '+this.clientId
    });
    return this._httpClient.post(this.url, data, {headers:header})
  }

}
