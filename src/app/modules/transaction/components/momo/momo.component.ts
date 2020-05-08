import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-momo',
  templateUrl: './momo.component.html',
  styleUrls: ['./momo.component.css']
})
export class MomoComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<MomoComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any) { }


  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }


  makePayment(){
    this.dialogRef.close(true);
  }

}
