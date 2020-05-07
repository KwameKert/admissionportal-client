import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  ListActiveProgramComponent
} from '../program/index';
import { MakeDepositComponent} from '../transaction';


const routes: Routes = [

    {path: 'show_programs', component: ListActiveProgramComponent},
    {path: 'make_deposit/:id', component: MakeDepositComponent},

]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicantRoutingModule { }
