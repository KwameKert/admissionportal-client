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

      // this.programDetail = [
      //   {icon: 'schedule', title: 'length' , data: this.programData.length},
      //   {icon: 'loyalty', title: 'price' , data: this.programData.price},
      //   {icon: 'domain', title: 'faculty' , data: this.programData.faculty},
      //   {icon: 'hourglass_full', title: 'deadline' , data: this.programData.endDate | date:''},
      // ]

      console.log(this.programData, this.programDetail)
    }, error=>{
      console.error(error)
    })
  }

}
