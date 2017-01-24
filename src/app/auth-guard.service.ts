import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { ValJWTService } from './val-jwt.service';



@Injectable()
export class AuthGuardService implements CanActivate{

  constructor(private router: Router, private valJWTService: ValJWTService) {}
  canActivate() {
    var TRFA: any;
    if (localStorage.getItem('currentUser')){
      this.valJWTService.ValJWTService()
        .subscribe(result =>{
          if(result === true){
            TRFA = true;
          }
          else{
            this.router.navigate(['/login']);
            return false;
          }
        });
        return true;
    }

    else{
      this.router.navigate(['/login']);
      return false;
    }

  }
}
  