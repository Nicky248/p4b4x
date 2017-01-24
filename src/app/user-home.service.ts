import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class UserHomeService {
  private token : any;
  private jwt = {};
  private apiUrl = 'http://52.67.42.173:2000/api/userHome';
  private apiUrl2 = 'http://52.67.42.173:2000/api/userPersonalShopper';

  constructor(private http: Http) {
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
    this.jwt = {token: this.token};
   }

  userHomeServ(){
    return this.http.post(this.apiUrl, this.jwt)
      .map((response: Response) =>{
        let json = response.json();
        return json;
      })
  }
  userPersonalShopper(personalShopper){
    return this.http.post(this.apiUrl2, personalShopper)
      .map((response: Response) =>{
        let json = response.json();
        return json
      })
  }
}
