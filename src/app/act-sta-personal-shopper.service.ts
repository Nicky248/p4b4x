import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class ActStaPersonalShopperService {

  private apiUrl = 'http://52.67.42.173:2000/api/actStaPersonalShopperService';

  constructor(private http: Http) { }
   actStatus(personalShopper){
     
     return this.http.post(this.apiUrl,personalShopper)
      .map((response: Response) =>{
        return response;})
   }
}
