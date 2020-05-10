import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  ListActiveProgramComponent
} from '../program/index';
import { MakeDepositComponent, CardDetailsComponent} from '../transaction';


const routes: Routes = [

    {path: 'show_programs', component: ListActiveProgramComponent},
    {path: 'make_deposit/:id', component: MakeDepositComponent},
    {path: 'card_details/:id/:price', component: CardDetailsComponent},

]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicantRoutingModule { }
