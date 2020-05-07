import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  ListActiveProgramComponent
} from '../program/index';


const routes: Routes = [

    {path: 'show_programs', component: ListActiveProgramComponent}

]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicantRoutingModule { }
