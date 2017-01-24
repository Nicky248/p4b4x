import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class RegistryService {
  private json = {};
  private apiUrl = 'http://52.67.42.173:2000/api/registryUser'

  constructor( private http: Http) { }

  servRegistry(json){
    return this.http.post(this.apiUrl,json);
  }
}
