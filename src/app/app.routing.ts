import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/index';
import { HomeComponent } from './home/index';
import { AuthGuardService } from './auth-guard.service';
import { RegistryComponent } from './registry/index';
import { AdministrationAppComponent } from './administration-app/index';
import { AuthAdminGuardService } from './auth-admin-guard.service';
import { LoginAdminComponent } from './login-admin/index';



const appRoutes: Routes = [
    {
        path: 'login', 
        component: LoginComponent
    },
    {
        path: 'home', 
        component: HomeComponent,
        canActivate: [AuthGuardService],
    },
    {
        path: 'registry',
        component: RegistryComponent
    },
    {
        path: 'administrationPOBox',
        component: AdministrationAppComponent,
        canActivate: [AuthAdminGuardService],
    },
    {
        path: 'loginAdmin',
        component: LoginAdminComponent,
    },
    {
        path: '**',
        redirectTo: 'login',
    }
];

export const Routing = RouterModule.forRoot(appRoutes);