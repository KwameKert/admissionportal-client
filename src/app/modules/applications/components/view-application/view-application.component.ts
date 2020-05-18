import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CrudService } from 'src/app/modules/shared/service/crud-service.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-view-application',
  templateUrl: './view-application.component.html',
  styleUrls: ['./view-application.component.css']
})
export class ViewApplicationComponent implements OnInit {

  applicationId: string;
  applicant: object;
  program: object;
  application: object;

  constructor(private _route: ActivatedRoute, private _crudService: CrudService, private ngxService: NgxUiLoaderService) { }

  ngOnInit(): void {
    this.ngxService.start();
    this.applicationId = this._route.snapshot.paramMap.get('id');
    this.fetchApplication()
    this.ngxService.stop();
  }


  fetchApplication(){
    this._crudService.fetchItem({id: this.applicationId,module: "application" }).subscribe(data=>{

      let result = data.data;

      this.application = result.application;
      this.applicant = result.applicant;
      this.program  = result.program;


    }, error=>{
      console.error(error)
    })
  }
}
