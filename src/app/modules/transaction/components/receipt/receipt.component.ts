import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.css']
})

export class ReceiptComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ReceiptComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }
  
  
    onNoClick(): void {
      this.dialogRef.close();
    }
  ngOnInit(): void {
  }

}
