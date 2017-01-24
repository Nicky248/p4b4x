import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class PreAlertService {
  private apiUrl = 'http://52.67.42.173:2000/api/preAlert'
  
  constructor( private http: Http) { }

  servPreAlert(json){
    return this.http.post(this.apiUrl, json)
      .map((response: Response) =>{
        if (response.status == 200){
          return true;
        }
        else{
          return false;
        }
      });
  }
}
