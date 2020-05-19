import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CrudService } from 'src/app/modules/shared/service/crud-service.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { threadId } from 'worker_threads';

@Component({
  selector: 'app-view-application',
  templateUrl: './view-application.component.html',
  styleUrls: ['./view-application.component.css']
})
export class ViewApplicationComponent implements OnInit {

  isLoading: boolean  = true;
  applicationId: string;
  applicant: any;
  program: any;
  application: any;
  d = new Date();
  age: number;
  year: number  = this.d.getFullYear();

  constructor(private _route: ActivatedRoute, private _crudService: CrudService, private ngxService: NgxUiLoaderService) { }

  ngOnInit(): void {
    this.ngxService.start();
    this.applicationId = this._route.snapshot.paramMap.get('id');
    this.fetchApplication()
   
  }


  fetchApplication(){
    this._crudService.fetchItem({id: this.applicationId,module: "application" }).subscribe(data=>{

      let result = data.data;

      this.application = result.application;
      this.applicant = result.applicant;
      this.program  = result.program;

      let d  = new Date(this.applicant.details[0].dob);
     
     this.age = this.year - d.getFullYear()
     // console.log(this.age)

      this.isLoading = false

     // console.log(this.application.createdAt)


    }, error=>{
      console.error(error)
    })
    this.ngxService.stop();
  }


  applicationResponse(response: string){
    console.log(response)
  }
}
