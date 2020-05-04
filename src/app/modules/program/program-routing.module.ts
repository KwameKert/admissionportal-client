import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListProgramComponent } from './components/list-program/list-program.component';

const routes: Routes = [ 

  {path: 'list_program', component: ListProgramComponent},
  
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProgramRoutingModule { }
