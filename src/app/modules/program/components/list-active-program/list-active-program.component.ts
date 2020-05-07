import { Component, OnInit ,  OnDestroy, ViewChild, ChangeDetectorRef} from '@angular/core';
import { CrudService } from 'src/app/modules/shared/service/crud-service.service';
import { Observable } from 'rxjs';

import { Program } from '../../program.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list-active-program',
  templateUrl: './list-active-program.component.html',
  styleUrls: ['./list-active-program.component.css']
})
export class ListActiveProgramComponent implements OnInit {

  isLoading: boolean = false;
  programs: Array<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  obs: Observable<any>;
  dataSource: MatTableDataSource<Program> ;

  constructor(private _crudService: CrudService, private _router: Router) { }

  ngOnInit(): void {
    this.loadAllPrograms();
  }


  loadAllPrograms(){
    this._crudService.fetchAll("program/active").subscribe(data=>{

      this.dataSource = new MatTableDataSource<Program>(data.data)
      this.dataSource.paginator = this.paginator;
      this.obs = this.dataSource.connect();
      //this.dataSource = new MatTableDataSource(data);
     // this.dataSource.paginator = this.paginator;
      this.isLoading = false;
    }, error=>{

    })
  }


  viewProgram(id: any){
    this._router.navigate([`/admin/view_program/${id}`])
  }

}
