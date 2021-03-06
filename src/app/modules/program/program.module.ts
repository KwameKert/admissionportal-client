import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProgramComponent,
  AddProgramComponent,
  EditProgramComponent,
  ViewProgramComponent
} from './index';
import { SharedModule } from '../shared/shared.module';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ListActiveProgramComponent } from './components/list-active-program/list-active-program.component';
import { MyProgramComponent } from './components/my-program/my-program.component';



@NgModule({
  declarations: [ListProgramComponent, AddProgramComponent, EditProgramComponent, ViewProgramComponent, ListActiveProgramComponent, MyProgramComponent],
  imports: [
    CommonModule,
  //  ProgramRoutingModule,
    SharedModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  exports: [
    CommonModule,
    SharedModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ListProgramComponent, 
    AddProgramComponent,
    EditProgramComponent, 
    ViewProgramComponent,
    ListActiveProgramComponent,
    MyProgramComponent
  ]
})
export class ProgramModule { }
