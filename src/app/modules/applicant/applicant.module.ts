import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgramModule } from '../program/program.module';
import { ApplicantRoutingModule } from './applicant-routing.module';
import { TransactionModule } from '../transaction/transaction.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
   ProgramModule,
    TransactionModule,
    ApplicantRoutingModule
  ]
})
export class ApplicantModule { }
