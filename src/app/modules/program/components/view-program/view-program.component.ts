import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { CrudService } from 'src/app/modules/shared/service/crud-service.service';

@Component({
  selector: 'app-view-program',
  templateUrl: './view-program.component.html',
  styleUrls: ['./view-program.component.css']
})
export class ViewProgramComponent implements OnInit {

  programId: any ;
  programData: any;

  programDetail: any;

  constructor(private _route: ActivatedRoute, private _crudService: CrudService) { }

  ngOnInit(): void {

    this.programId = this._route.snapshot.paramMap.get('id');
    this.getProgram();
    
  }

  getProgram(){
    this._crudService.fetchItem({id: this.programId, module: 'program'}).subscribe(result=>{

      this.programData = result.data
      console.log(this.programData, this.programDetail)
    }, error=>{
      console.error(error)
    })
  }

}
