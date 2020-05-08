import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MakeDepositComponent } from './components/make-deposit/make-deposit.component';
import { SharedModule } from '../shared/shared.module';
import { CardDetailsComponent } from './components/card-details/card-details.component';
import { MomoComponent } from './components/momo/momo.component';



@NgModule({
  declarations: [MakeDepositComponent, CardDetailsComponent, MomoComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [MakeDepositComponent,CardDetailsComponent, MomoComponent]
})
export class TransactionModule { }
