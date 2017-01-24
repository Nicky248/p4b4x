import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class ShippingsService {
  private apiUrl = 'http://52.67.42.173:2000/api/shippings';
  private tracking: string;
  constructor( private http: Http) { }
  report(json){
  return this.http.post(this.apiUrl,json)
      .map((response: Response) =>{
        if (response.status == 200){
          let tracking = response.json()
          return tracking;
        }
        else{
          return false;
        }
      })
  }
}
