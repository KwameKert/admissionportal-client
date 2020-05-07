import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { CrudService } from 'src/app/modules/shared/service/crud-service.service';

@Component({
  selector: 'app-view-program',
  templateUrl: './view-program.component.html',
  styleUrls: ['./view-program.component.css']
})
export class ViewProgramComponent implements OnInit {

  programId: any ;
  isApplicant: boolean;
  programData: any;

  programDetail: any;

  constructor(private _route: ActivatedRoute, private _crudService: CrudService, private _router: Router) { }

  ngOnInit(): void {

    localStorage.getItem("role") == 'applicant' ? this.isApplicant =true : this.isApplicant = false;

    this.programId = this._route.snapshot.paramMap.get('id');
    this.getProgram();
    
  }

  getProgram(){
    this._crudService.fetchItem({id: this.programId, module: 'program'}).subscribe(result=>{

      this.programData = result.data
     
    }, error=>{
      console.error(error)
    })
  }

  makeDeposit(id){
    this._router.navigate([`/applicant/make_deposit/${id}`])
  }

}
