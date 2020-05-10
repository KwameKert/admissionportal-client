import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent ,SidebarComponent,FooterComponent} from './layouts';
import { AppRoutingModule } from './app-routing.module';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { DefaultComponent } from './layouts/default/default.component';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DatePipe } from '@angular/common';
import { AuthInterceptor, TokenInterceptor} from './interceptors/index';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ApplicantLayoutComponent } from './layouts/applicant-layout/applicant-layout.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    AuthLayoutComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    DefaultComponent,
    AdminLayoutComponent,
    ApplicantLayoutComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatDividerModule,
    FlexLayoutModule,
    MatMenuModule,
    MatButtonModule,
    MatListModule,
    HttpClientModule,
    MatSidenavModule,  
    NgxUiLoaderModule,
    ToastrModule.forRoot()
    
  ],
  providers: [
    DatePipe, 
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
