import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  ListActiveProgramComponent, MyProgramComponent
} from '../program/index';
import { MakeDepositComponent, CardDetailsComponent} from '../transaction';


const routes: Routes = [

    {path: 'show_programs', component: ListActiveProgramComponent},
    {path: 'make_deposit/:id', component: MakeDepositComponent},
    {path: 'program', component: MyProgramComponent}

]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicantRoutingModule { }
