import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { ApplicantDashboardComponent } from './components/applicant-dashboard/applicant-dashboard.component';



@NgModule({
  declarations: [AdminDashboardComponent, ApplicantDashboardComponent],
  imports: [
    CommonModule,
  ]
})
export class DashboardModule { }
