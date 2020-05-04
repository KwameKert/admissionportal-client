import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProgramComponent } from './components/list-program/list-program.component';
import { ProgramRoutingModule } from './program-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AddProgramComponent } from './components/add-program/add-program.component';
import { EditProgramComponent } from './components/edit-program/edit-program.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';



@NgModule({
  declarations: [ListProgramComponent, AddProgramComponent, EditProgramComponent],
  imports: [
    CommonModule,
    ProgramRoutingModule,
    SharedModule,
    MatDatepickerModule,
    MatNativeDateModule
  ]
})
export class ProgramModule { }
