import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CrudService } from 'src/app/modules/shared/service/crud-service.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  
  isLoading: boolean = true;
  dataSource = new MatTableDataSource<any>();

  displayedColumns = ['transactionId','user', 'amount', 'date'];


  constructor(private _crudService: CrudService, private ngxService: NgxUiLoaderService) { }

  ngOnInit(): void {
    this.fetchTransactions()
  }

  fetchTransactions(){
    this.ngxService.start()

    this._crudService.fetchAll("transactions").subscribe(data=>{

          this.dataSource = new MatTableDataSource(data.data)
          this.dataSource.paginator = this.paginator;
          this.isLoading = false;
    })

    this.ngxService.stop()
  }




}
