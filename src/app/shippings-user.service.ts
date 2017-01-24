import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class ShippingsUserService {

  private apiUrl = 'http://52.67.42.173:2000/api/shippingsUser';
  constructor(private http: Http) { }

  shippingsUserServ(id){
    return this.http.post(this.apiUrl, id)
      .map((response: Response) =>{
        return response.json();
      })
  }
}
