import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/modules/shared/service/crud-service.service';


@Component({
  selector: 'app-my-program',
  templateUrl: './my-program.component.html',
  styleUrls: ['./my-program.component.css']
})
export class MyProgramComponent implements OnInit {

  applications: Array<object>;
  constructor(private _crudService: CrudService
    ) { }

  ngOnInit(): void {
   this.loadApplications()
  }


  loadApplications(){
    this._crudService.fetchAll("myapplications").subscribe(data=>{

      this.applications = data.data;
    }, error =>{
      console.error(error)
    })
  }

}
