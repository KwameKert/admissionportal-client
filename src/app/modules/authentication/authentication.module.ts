import { NgModule } from '@angular/core';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './components/login/login.component';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { ApplicantDetailComponent } from './components/applicant-detail/applicant-detail.component';
import { RegisterComponent } from './components/register/register.component';




@NgModule({
  declarations: [LoginComponent, ApplicantDetailComponent, RegisterComponent],
  imports: [
    AuthenticationRoutingModule,
    CommonModule,
    SharedModule,
  ],
  exports: [
  ],
})
export class AuthenticationModule { }
