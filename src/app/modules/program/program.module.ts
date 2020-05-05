import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProgramComponent } from './components/list-program/list-program.component';
import { ProgramRoutingModule } from './program-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AddProgramComponent } from './components/add-program/add-program.component';
import { EditProgramComponent } from './components/edit-program/edit-program.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ViewProgramComponent } from './components/view-program/view-program.component';



@NgModule({
  declarations: [ListProgramComponent, AddProgramComponent, EditProgramComponent, ViewProgramComponent],
  imports: [
    CommonModule,
    ProgramRoutingModule,
    SharedModule,
    MatDatepickerModule,
    MatNativeDateModule
  ]
})
export class ProgramModule { }
