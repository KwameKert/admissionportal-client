import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgramModule } from '../program/program.module';
import { ApplicantRoutingModule } from './applicant-routing.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProgramModule,
    ApplicantRoutingModule
  ]
})
export class ApplicantModule { }
