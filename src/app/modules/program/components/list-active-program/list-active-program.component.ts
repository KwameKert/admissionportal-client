import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/modules/shared/service/crud-service.service';

@Component({
  selector: 'app-list-active-program',
  templateUrl: './list-active-program.component.html',
  styleUrls: ['./list-active-program.component.css']
})
export class ListActiveProgramComponent implements OnInit {

  isLoading: boolean = false;
  constructor(private _crudService: CrudService) { }

  ngOnInit(): void {
    this.loadAllPrograms();
  }


  loadAllPrograms(){
    this._crudService.fetchAll("program/active").subscribe(data=>{

      console.log(data)
      //this.dataSource = new MatTableDataSource(data);
     // this.dataSource.paginator = this.paginator;
      this.isLoading = false;
    }, error=>{

    })
  }

}
