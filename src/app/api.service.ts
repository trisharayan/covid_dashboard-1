import { Injectable } from '@angular/core';
import { environment } from './../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) {
      this.api_url= environment.apiurl

  }
  api_url:string;

  getTimelinedata():Observable<any>{
    return this.http.get(this.api_url+"timeline")
  }

  getWorldCount():Observable<any>{
    return this.http.get(this.api_url+"countries")
  }




}
