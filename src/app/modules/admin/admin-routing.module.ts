import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from '../dashboard/components/admin-dashboard/admin-dashboard.component';
import { ListProgramComponent,
  ViewProgramComponent
} from '../program';

import { TransactionListComponent} from '../transaction';
import { ApplicationListComponent } from '../applications/components/application-list/application-list.component';

const routes: Routes = [


  {path: 'dashboard', component: AdminDashboardComponent},
  {path: 'list_program', component: ListProgramComponent},
  {path: 'view_program/:id', component: ViewProgramComponent},
  {path: 'list_transaction', component: TransactionListComponent},
  {path: 'list_applications', component: ApplicationListComponent},
]


@NgModule({
  declarations: [],
  imports: [  CommonModule, RouterModule.forChild(routes),
    ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
