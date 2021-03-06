import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class PreAlertsService {
  private token: string;
  private apiUrl = 'http://52.67.42.173:2000/api/adminPreAlerts';

  constructor(private http:Http) {
    var adminUser = JSON.parse(localStorage.getItem('adminUser'));
    this.token = adminUser && adminUser.token;
    
   }
   request(){
     var jwt = {token: this.token};
     return this.http.post(this.apiUrl, jwt)
      .map(this.getData)
   }
   getData(response: Response){
     let json = response.json();
     if(json){
       return json;
     }
     else{
       return false;
     }
   }
}
