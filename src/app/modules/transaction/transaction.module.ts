import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MakeDepositComponent } from './components/make-deposit/make-deposit.component';
import { SharedModule } from '../shared/shared.module';
import { CardDetailsComponent } from './components/card-details/card-details.component';
import { MomoComponent } from './components/momo/momo.component';
import { ReceiptComponent } from './components/receipt/receipt.component';



@NgModule({
  declarations: [MakeDepositComponent, CardDetailsComponent, MomoComponent, ReceiptComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [MakeDepositComponent,CardDetailsComponent, MomoComponent,  ReceiptComponent]
})
export class TransactionModule { }
