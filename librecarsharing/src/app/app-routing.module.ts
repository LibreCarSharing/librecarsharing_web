import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CarsComponent } from './cars/cars.component';
import { LoginComponent } from './login/login.component';
import { AppAuthGuard } from './utils/app-authguard';
import { UsersComponent } from './users/users.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full', canActivate: [AppAuthGuard] },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'cars', component: CarsComponent },
  { path: 'users', component: UsersComponent },
  { path: 'admin', component: AdminComponent }
  //{ path: 'logout', redirectTo: 'http://localhost:8080/auth/realms/testing/protocol/openid-connect/logout?redirect_uri=http%3A%2F%2Flocalhost%3A4200', canActivate: [AppAuthGuard] }

]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
