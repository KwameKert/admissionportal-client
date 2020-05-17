import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ApplicantDetailComponent } from './components/applicant-detail/applicant-detail.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [ 

  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'applicant_details/:id', component: ApplicantDetailComponent},
  {path: 'register', component: RegisterComponent},
  
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
