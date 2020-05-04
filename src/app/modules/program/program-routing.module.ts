import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListProgramComponent } from './components/list-program/list-program.component';
import { DashboardModule} from '../dashboard/dashboard.module';
import { AdminDashboardComponent } from '../dashboard/components/admin-dashboard/admin-dashboard.component';

const routes: Routes = [ 

  {path: 'dashboard', component: AdminDashboardComponent},
  {path: 'list_program', component: ListProgramComponent},
  
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes),
    DashboardModule],
  exports: [RouterModule]
})
export class ProgramRoutingModule { }
