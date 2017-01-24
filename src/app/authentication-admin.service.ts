import { Injectable } from '@angular/core';
import { Http, Headers,Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Md5 } from 'ts-md5/dist/md5';

@Injectable()
export class AuthenticationAdminService {
  private token: string;
  private apiUrl = 'http://52.67.42.173:2000/api/adminAuthentication';

  constructor(private http: Http) { 
    var adminUser = JSON.parse(localStorage.getItem('adminUser'));
    this.token = adminUser && adminUser.token;
  }

  login(user,password):Observable<boolean>{
    password = Md5.hashStr(password);
    var jsonLogin = {user: user, password:password};
    return this.http.post(this.apiUrl, jsonLogin)
      .map((response: Response) => {
        let token = response.json() && response.json().token;
        if (token){
          localStorage.setItem('adminUser', JSON.stringify({user: user, token: token}));
          return true;
        }
        else{
          let error = response.json();
          return error && false;
        }
      });
  }
  logout(): void {
        this.token = null;
        localStorage.removeItem('adminUser');
    }
}
