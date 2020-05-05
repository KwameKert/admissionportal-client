import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CrudService } from 'src/app/modules/shared/service/crud-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-program',
  templateUrl: './add-program.component.html',
  styleUrls: ['./add-program.component.scss']
})
export class AddProgramComponent implements OnInit {

  programForm: FormGroup;
  
  @Output() newProgram: EventEmitter<boolean> = new EventEmitter();

  constructor(private _crudService: CrudService, private _fb: FormBuilder, private _toastr: ToastrService) { }

  ngOnInit(): void {

    this.programForm = this._fb.group({
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      endDate: new FormControl('', Validators.required),
      faculty:  new FormControl('', Validators.required),
      length:  new FormControl('', Validators.required),
      status: new FormControl('', Validators.required)
    })
  }


  saveProgram(){

    this._crudService.addItem(this.programForm.value,"program").subscribe(data=>{

      this._toastr.success(data.message, "Success  😊", {  timeOut:2000});
      this.newProgram.emit(true)
    }, error=> {
    this._toastr.info("Ooops", "Unexpected Error  🥺", {  timeOut:5000});
      console.error(error)
    })
  }


}
