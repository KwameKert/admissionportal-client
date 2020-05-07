import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MakeDepositComponent } from './components/make-deposit/make-deposit.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [MakeDepositComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [MakeDepositComponent]
})
export class TransactionModule { }
