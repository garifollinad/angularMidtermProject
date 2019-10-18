import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LoginService} from './login.service';
import {AuthService} from './auth.service';
import { LoginComponent } from './portal/login/login.component';
import { RegisterComponent } from './portal/register/register.component';
import {RegisterService} from './portal/register/register.service';
import { PortalComponent } from './portal/portal.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {AuthGuard} from './guards/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    LoginComponent,
    RegisterComponent,
    PortalComponent,
    DashboardComponent,
    PortalComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [LoginService, AuthService, RegisterService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
