import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MakeDepositComponent } from './components/make-deposit/make-deposit.component';
import { SharedModule } from '../shared/shared.module';
import { CardDetailsComponent } from './components/card-details/card-details.component';
import { MomoComponent } from './components/momo/momo.component';
import { ReceiptComponent } from './components/receipt/receipt.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { TransactionListComponent } from './components/transaction-list/transaction-list.component';



@NgModule({
  declarations: [MakeDepositComponent, CardDetailsComponent, MomoComponent, ReceiptComponent, TransactionListComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatProgressSpinnerModule
  ],
  exports: [MakeDepositComponent,CardDetailsComponent, MomoComponent,  ReceiptComponent, TransactionListComponent]
})
export class TransactionModule { }
