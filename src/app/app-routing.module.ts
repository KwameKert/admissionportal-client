import { NgModule } from '@angular/core';
import { RouterModule, Routes ,PreloadAllModules} from '@angular/router';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import {DefaultComponent} from './layouts/default/default.component';
import { AuthGuard } from './auth.guard';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ApplicantLayoutComponent } from './layouts/applicant-layout/applicant-layout.component';

const routes: Routes= [
{
  path:'', 
  component: AuthLayoutComponent,
  loadChildren: () => import('./modules/authentication/authentication.module')
                     .then(m => m.AuthenticationModule)
},

{
  path:'admin', 
  component: AdminLayoutComponent,
  loadChildren: () => import('./modules/program/program.module')
                     .then(m => m.ProgramModule),
  canActivate:[AuthGuard]  
},


// {
//   path:'applicant', 
//   component: ApplicantLayoutComponent,
//   loadChildren: () => import('./modules/program/program.module')
//                      .then(m => m.ProgramModule),
//   canActivate:[AuthGuard]  
// },
//{path: "**", redirectTo: "login"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
