import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListActiveProgramComponent } from './components/list-active-program/list-active-program.component';
import { ApplicationRoutingModule } from './application-routing.module';
import { ApplyProgramComponent } from './components/apply-program/apply-program.component';



@NgModule({
  declarations: [ListActiveProgramComponent, ApplyProgramComponent],
  imports: [
    CommonModule,
    ApplicationRoutingModule
  ]
})
export class ApplicationModule { }
