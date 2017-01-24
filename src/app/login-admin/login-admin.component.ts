import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationAdminService } from '../authentication-admin.service'

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {
  model: any = {};
  loading = false;
  error = '';

  constructor(
    private router: Router,
    private authenticationService: AuthenticationAdminService) { }

  ngOnInit() {
    this.authenticationService.logout();
  }
  login(){
    this.loading = true;
    this.authenticationService.login(this.model.user, this.model.password)
      .subscribe(result => {
        if (result == true){
          this.router.navigate(['/administrationPOBox']);
        }
        else{
          this.error = 'Usuario o password incorrecto *';
          this.loading = false;
        }
      })
  }

}
