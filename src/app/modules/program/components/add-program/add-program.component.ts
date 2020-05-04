import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CrudService } from 'src/app/modules/shared/service/crud-service.service';

@Component({
  selector: 'app-add-program',
  templateUrl: './add-program.component.html',
  styleUrls: ['./add-program.component.scss']
})
export class AddProgramComponent implements OnInit {

  programForm: FormGroup;

  constructor(private _crudService: CrudService, private _fb: FormBuilder) { }

  ngOnInit(): void {

    this.programForm = this._fb.group({
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      endDate: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required)
    })
  }


  saveProgram(){

    this._crudService.addItem(this.programForm.value,"program").subscribe(data=>{

    }, error=> console.error(error))
  }


}
