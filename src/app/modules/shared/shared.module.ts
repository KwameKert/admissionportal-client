import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import {MatMenuModule} from '@angular/material/menu';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
 import { FlexLayoutModule } from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSlideToggleModule} from '@angular/material/slide-toggle'
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import { DeleteItemComponent } from './components/delete-item/delete-item.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { ExcerptFilter } from './excerpts.pipe';
import { MatSelectModule } from '@angular/material/select';
import { PreloaderComponent } from './components/preloader/preloader.component';
import {MatListModule} from '@angular/material/list';




@NgModule({
  declarations: [DeleteItemComponent, ExcerptFilter, PreloaderComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatInputModule,
    MatDatepickerModule,
    MatDatepickerModule,
   // MatNativeDateModule ,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatIconModule,
    // MatStepperModule,
    // MatCheckboxModule,
    MatButtonModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatCardModule,
    MatDividerModule,
    MatSelectModule,
    MatIconModule,
    MatSlideToggleModule,
    MatDialogModule,
    NgxSkeletonLoaderModule,
    MatMenuModule,
    MatListModule
    
  ],
  providers: [  
  //  MatDatepickerModule,  
  ],
  exports: [
    MatTableModule,
    MatInputModule,
    MatDatepickerModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatDialogModule,
    DeleteItemComponent,
    NgxSkeletonLoaderModule,
    ExcerptFilter,
    PreloaderComponent,
    ExcerptFilter,
    MatMenuModule,
    MatListModule
  ],
  entryComponents: [DeleteItemComponent]
})
export class SharedModule { }
