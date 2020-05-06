import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgramModule } from '../program/program.module';
import { DashboardModule } from '../dashboard/dashboard.module';
import { SharedModule } from '../shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProgramModule,
   DashboardModule,
    SharedModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
