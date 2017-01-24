import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ValAdminJWTService {

  private token: string;
  private apiUrl = 'http://52.67.42.173:2000/api/adminRouteValidate';
  private errorHttp: any;

  constructor(private http: Http) { }

  ValAdminJWTService(){
    var adminUser = JSON.parse(localStorage.getItem('adminUser'));
    this.token = adminUser && adminUser.token;
    var jwt = { token: this.token};
    return this.http.post(this.apiUrl, jwt)
                    .map(this.getData)
  }

  getData(response: Response){
    let json = response.json() && response.json().message;
    if (json == "Token is valid"){
      return true;
    }
    else{
      return false;
    }
  }
}
