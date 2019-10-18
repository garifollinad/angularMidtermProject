import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegisterComponent} from "./portal/register/register.component";
import {LoginComponent} from "./portal/login/login.component";
import {PortalComponent} from "./portal/portal.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {AuthGuard} from "./guards/auth.guard";

const routes: Routes = [
  {
    path: 'portal',
    component: PortalComponent,
    children: [
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'signIn',
        component: LoginComponent
      },
      {
        path: '',
        redirectTo: '/portal/signIn',
        pathMatch: 'full'
      },
      {
        path: '**',
        redirectTo: '/portal/signIn',
        pathMatch: 'full'
      },
    ]
  },
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    component: DashboardComponent,
    children: []
  },
  {
    path: '',
    redirectTo: '/portal/signIn',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/portal/signIn',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
