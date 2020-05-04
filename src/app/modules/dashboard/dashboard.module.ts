import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { ApplicantDashboardComponent } from './components/applicant-dashboard/applicant-dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [AdminDashboardComponent, ApplicantDashboardComponent],
  imports: [
    CommonModule,
    SharedModule,
    ChartsModule
  ]
})
export class DashboardModule { }
