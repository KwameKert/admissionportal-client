import { NgModule } from '@angular/core';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './components/login/login.component';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { ApplicantDetailComponent } from './components/applicant-detail/applicant-detail.component';




@NgModule({
  declarations: [LoginComponent, ApplicantDetailComponent],
  imports: [
    AuthenticationRoutingModule,
    CommonModule,
    SharedModule,
  ],
  exports: [
  ],
})
export class AuthenticationModule { }
