import { NgModule, ApplicationModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgramModule } from '../program/program.module';
import { DashboardModule } from '../dashboard/dashboard.module';
import { SharedModule } from '../shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';
import {ApplicationsModule } from '../applications/applications.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProgramModule,
   DashboardModule,
   ApplicationsModule,
    SharedModule,
    AdminRoutingModule,
   
  ]
})
export class AdminModule { }
