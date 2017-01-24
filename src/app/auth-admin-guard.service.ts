import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { ValAdminJWTService } from './val-admin-jwt.service';

@Injectable()
export class AuthAdminGuardService implements CanActivate{

  constructor(private router:Router, 
              private valAdminJWTService: ValAdminJWTService) { }
  
  canActivate(){
    var TRFA: any;
    if(localStorage.getItem('adminUser')){
      this.valAdminJWTService.ValAdminJWTService()
        .subscribe(result =>{
          if(result === true){
            TRFA = true;
          }
          else{
            this.router.navigate(['/loginAdmin'])
            alert('Acceso denegado.');            
            return false;
          }
        });
        return true;
    }
    else{
      this.router.navigate(['/loginAdmin'])
      alert('Acceso denegado.');      
      return false;
    }    
  }
}
