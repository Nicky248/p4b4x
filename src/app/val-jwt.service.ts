import { Injectable } from '@angular/core';
import { Http, Headers, Response} from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ValJWTService {

  private token: string;
  private apiUrl = 'http://52.67.42.173:2000/api/routeValidate';
  private errorHttp : any;

  constructor(private http: Http) { }

  ValJWTService(){
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
    var jwt = {token: this.token};
    return this.http.post(this.apiUrl,jwt)
                      .map(this.getData)
                      /*.catch(this.catchError)*/

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
  catchError(response){
    var error = response.status;
    if(error == 401){
      this.errorHttp = false;               
      console.log(" Paso por 401 " + this.errorHttp);
      return Observable.throw('Unauthorized');
    }
    else{
      this.errorHttp = false;
      console.log(error);
      return Observable.throw('Other Error');
    }
  }
}
