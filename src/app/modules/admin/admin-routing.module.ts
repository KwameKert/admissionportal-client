import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from '../dashboard/components/admin-dashboard/admin-dashboard.component';
import { ListProgramComponent,
  ViewProgramComponent
} from '../program';

const routes: Routes = [


  {path: 'dashboard', component: AdminDashboardComponent},
  {path: 'list_program', component: ListProgramComponent},
  {path: 'view_program/:id', component: ViewProgramComponent},
]


@NgModule({
  declarations: [],
  imports: [  CommonModule, RouterModule.forChild(routes),
    ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
