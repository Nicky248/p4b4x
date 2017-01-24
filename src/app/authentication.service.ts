import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Md5 } from 'ts-md5/dist/md5';

@Injectable()
export class AuthenticationService {
  private token: string;
  private apiUrl = 'http://52.67.42.173:2000/api/authentication'

  constructor(private http: Http) { 
    // set token if saved in local storage
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
  }
  login(email, password): Observable<boolean> {
    password = Md5.hashStr(password);
    var jsonLogin = { email: email, password: password };

    return this.http.post(this.apiUrl, jsonLogin)
        .map((response: Response) => {
            // login successful if there's a jwt token in the response
            let token = response.json() && response.json().token;
            if (token) {
                // set token property
                // store email and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify({ email: email, token: token }));

                // return true to indicate successful login
                return true;
            } 
            else {
                let error = response.json();
                // return false to indicate failed login
                return error && false;
            }
        });
    }

    logout(): void {
        // clear token remove user from local storage to log user out
        this.token = null;
        localStorage.removeItem('currentUser');
    }
}