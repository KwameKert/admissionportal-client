import {Component, Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ApplicationService } from '../../service/application.service';


@Component({
  selector: 'app-application-response',
  templateUrl: './application-response.component.html',
  styleUrls: ['./application-response.component.css']
})
export class ApplicationResponseComponent  {

  constructor(
    public dialogRef: MatDialogRef<ApplicationResponseComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private _applicationService: ApplicationService) {}

    close(){
      this.dialogRef.close({event:true, data: null});
    }
  
  
    done(){
      let response = {
        id: this.data.id,
        data:{status: this.data.action}
      }

      this._applicationService.updateApplication(response).subscribe(data=>{
        this.dialogRef.close({evt: true, data: data.data});
      }, error=>{
        this.dialogRef.close({evt: false});
      })
      
       
    }


}
