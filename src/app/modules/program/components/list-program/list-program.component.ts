import { Component, OnInit, ViewChild } from '@angular/core';
import { CrudService } from 'src/app/modules/shared/service/crud-service.service';
import { MatPaginator } from '@angular/material/paginator';
import { DeleteItemComponent } from 'src/app/modules/shared/components/delete-item/delete-item.component';
import {  MatSnackBar,  } from '@angular/material/snack-bar';
import {  MatTableDataSource,  } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-program',
  templateUrl: './list-program.component.html',
  styleUrls: ['./list-program.component.css']
})
export class ListProgramComponent implements OnInit {


  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  
  isLoading: boolean = true;
  dataSource = new MatTableDataSource<any>();
  slide: boolean = false;

  isAddProgram: boolean = false;

  displayedColumns: any ;
  listProgramColumn: string = 'col-md-12';
  addProgramColumn: string = 'd-none'



  allowedColumns: any = [
    {def: 'name', slideShow: true},
    {def: 'price',  slideShow: true},
    {def: 'description', slideShow: false},
    {def: 'endDate',  slideShow: false},
    {def: 'status', slideShow:false},
    {def: 'actions', slideShow: false}
  ];

  constructor(private _crudService: CrudService, public dialog: MatDialog, private _snackBar: MatSnackBar, private _toastr: ToastrService) { }

  ngOnInit(): void {
    this.getCollumnDefinitions();
    this.loadAllPrograms();
  
  }


  loadAllPrograms(){
    this._crudService.fetchAll("program/all").subscribe(data=>{

      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.isLoading = false;
    }, error=>{

    })
  }

  getCollumnDefinitions(){
    if(this.slide){
      this.displayedColumns = this.allowedColumns
                                  .filter(col => col.slideShow == true ).map(cd => cd.def);
    }else{
      this.displayedColumns = this.allowedColumns.map(cd => cd.def);
    }

  }

  addProgram(){
    this.slide = true;
    this.getCollumnDefinitions();
    this.listProgramColumn = 'col-md-6';
    this.addProgramColumn = 'col-md-6';
    this.isAddProgram = true;
  }

  listProgram(){

    this.slide = false;
    this.getCollumnDefinitions();
    this.listProgramColumn = 'col-md-12';
    this.addProgramColumn = 'd-none';
    this.isAddProgram = false;
  }



  reloadList(event: any){
    this.loadAllPrograms();
  }

  // deleteDepartment(id: Number){
  //   let data = {
  //     module: 'department',
  //     id
  //   }
  //   const dialogRef = this.dialog.open(DeleteItemComponent, {
  //     width: '550px',
  //     height: '180px',
  //     data: data
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     if(result.event){
  //       this._snackBar.open("Department Deleted 🙂  ", "", {
  //         duration: 2000,
  //       });
  //       if(result.data != null){
  //         this.dataSource = new MatTableDataSource(result.data);
  //         this.dataSource.paginator = this.paginator;
  //       }

  //     }else{

  //       this._toastr.error("Oops an error. 🥺","",{
  //         timeOut:2000
  //       })
  //     }
  //   });
  // }

}
