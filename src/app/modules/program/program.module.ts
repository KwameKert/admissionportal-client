import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProgramComponent } from './components/list-program/list-program.component';
import { ProgramRoutingModule } from './program-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [ListProgramComponent],
  imports: [
    CommonModule,
    ProgramRoutingModule,
    SharedModule
  ]
})
export class ProgramModule { }
