import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { CrudService } from 'src/app/modules/shared/service/crud-service.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-application-list',
  templateUrl: './application-list.component.html',
  styleUrls: ['./application-list.component.css']
})
export class ApplicationListComponent implements OnInit {

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  
  isLoading: boolean = true;
  dataSource = new MatTableDataSource<any>();

  displayedColumns = ['program','applicant', 'status', 'date', 'actions'];


  constructor(private _router: Router, private ngxService: NgxUiLoaderService, private _crudService: CrudService) { }

  ngOnInit(): void {
    this.ngxService.start()
    this.fetchApplications()
    this.ngxService.stop()
  }


  fetchApplications(){
    this._crudService.fetchAll("applications").subscribe(data=>{
      this.dataSource = new MatTableDataSource(data.data)
      this.dataSource.paginator = this.paginator;
     
    }, error=>{
      console.error(error)
    })
    this.isLoading = false;
  }

  viewApplication(id: string){

  }

}
