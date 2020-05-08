import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CardDetailsComponent } from '../card-details/card-details.component';
import { MomoComponent } from '../momo/momo.component';
import { CrudService } from 'src/app/modules/shared/service/crud-service.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-make-deposit',
  templateUrl: './make-deposit.component.html',
  styleUrls: ['./make-deposit.component.scss']
})
export class MakeDepositComponent implements OnInit {

  programId: any;
  program: any;
  card: boolean ;
  momo: boolean;

  constructor(public dialog: MatDialog, private _crudService: CrudService, private _route: ActivatedRoute){}
  ngOnInit(): void {

    this.programId = this._route.snapshot.paramMap.get('id');
    this.getProgram();
    //throw new Error("Method not implemented.");
  }


  getProgram() {
    this._crudService.fetchItem({id: this.programId, module: 'program'}).subscribe(data=>{
      this.program = data.data;
    //  console.log(this.program)
    }, error =>{
      console.error(error);
    })
  }


  cardForm(){
    const dialogRef = this.dialog.open(CardDetailsComponent, {
      width: '600px',
      data: this.program
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    
    });
  }

  momoDetails(){

    const dialogRef = this.dialog.open(MomoComponent, {
      width: '650px',
      height:'450px',
      data: this.program
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    
    });
  }


  openDialog(): void {
   
  }



}
