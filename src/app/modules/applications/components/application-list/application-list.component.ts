import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
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


  constructor(private _router: Router, private _crudService: CrudService) { }

  ngOnInit(): void {
   
    this.fetchApplications()
  
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

    this._router.navigate([`/admin/view_application/${id}`])
  }

}
