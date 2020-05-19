import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationListComponent } from './components/application-list/application-list.component';
import { SharedModule } from '../shared/shared.module';
import { ViewApplicationComponent } from './components/view-application/view-application.component';
import { ApplicationResponseComponent } from './components/application-response/application-response.component';


@NgModule({
  declarations: [ApplicationListComponent, ViewApplicationComponent, ApplicationResponseComponent],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    ApplicationListComponent,
    ViewApplicationComponent
  ]
})
export class ApplicationsModule { }
