/*Angular*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/*Modules*/
import { Routing } from './app.routing';

/*Services*/
import { AuthenticationService } from './authentication.service';
import { AuthGuardService } from './auth-guard.service';
import { ValJWTService } from './val-jwt.service';
import { RegistryService } from './registry.service';
import { PreAlertService } from './pre-alert.service';
import { UserHomeService } from './user-home.service';
import { AuthAdminGuardService } from './auth-admin-guard.service';
import { ValAdminJWTService } from './val-admin-jwt.service';
import { AuthenticationAdminService } from './authentication-admin.service';
import { PreAlertsService } from './pre-alerts.service';
import { ShippingsService } from './shippings.service';
import { PreAlertStatusService } from './pre-alert-status.service';
import { ShippingsUserService} from './shippings-user.service';
import { AdminPersonalShopperService } from './admin-personal-shopper.service';
import { ActStaPersonalShopperService } from './act-sta-personal-shopper.service';


/*Libraries*/
import { MaterialModule} from '@angular/material';
import { Ng2UploaderModule } from 'ng2-uploader';
import { Ng2PaginationModule } from 'ng2-pagination';

/*Components*/
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistryComponent } from './registry/registry.component';
import { HomeComponent } from './home/home.component';
import { AdministrationAppComponent,DialogImageBill } from './administration-app/administration-app.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegistryComponent,
    AdministrationAppComponent,
    LoginAdminComponent,
    DialogImageBill
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    Routing,
    Ng2UploaderModule,
    Ng2PaginationModule,
  ],
  providers: [
    AuthenticationService,
    AuthGuardService,
    ValJWTService,
    RegistryService,
    PreAlertService,
    UserHomeService,
    AuthAdminGuardService,
    ValAdminJWTService,
    AuthenticationAdminService,
    PreAlertsService,
    ShippingsService,
    PreAlertStatusService,
    ShippingsUserService,
    AdminPersonalShopperService,
    ActStaPersonalShopperService
  ],
  entryComponents: [
    DialogImageBill,
  ],
  bootstrap: [
    AppComponent
    ]
})
export class AppModule { }
