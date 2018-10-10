import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CarsComponent } from './cars/cars.component';
import { LoginComponent } from './login/login.component';
import { AppAuthGuard } from './utils/app-authguard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full', canActivate: [AppAuthGuard] },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'cars', component: CarsComponent }

]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
