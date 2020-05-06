import { Component, OnInit, EventEmitter, Output, Input, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CrudService } from 'src/app/modules/shared/service/crud-service.service';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-edit-program',
  templateUrl: './edit-program.component.html',
  styleUrls: ['./edit-program.component.css']
})
export class EditProgramComponent implements OnInit {

  programForm: FormGroup;

  @Input() programId : number;
  
  @Output() newProgram: EventEmitter<boolean> = new EventEmitter();

  constructor(private _crudService: CrudService, private _fb: FormBuilder, private _toastr: ToastrService) { }

  ngOnInit(): void {

  
  }


  loadForm(){
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

  findProgram(id){

      this._crudService.fetchItem({id: id, module: 'program'}).subscribe(data=>{
        let result = data.data;
    
        this.programForm.patchValue({
          _id: result._id,
          name: result.name,
          description: result.description,
          price: result.price,
          endDate: result.endDate,
          faculty:  result.faculty,
          length:  result.length,
          status: result.status
        })

      }, error=>{
        console.error(error);
        this._toastr.info("Ooops", "Program Not found   🥺", {  timeOut:5000});
     
  
      })
  }

  saveProgram(){

    this._crudService.updateItem({data: this.programForm.value,module: "program", id: this.programId}).subscribe(data=>{

    
      this._toastr.success(data.message, "Success  😊", {  timeOut:2000});
      this.newProgram.emit(true)
    }, error=> {
    this._toastr.info("Ooops", "Unexpected Error  🥺", {  timeOut:5000});
      console.error(error)
    })
  }


  ngOnChanges(changes: SimpleChanges) {
    this.loadForm();
    console.log(changes.programId.currentValue)
    this.findProgram(changes.programId.currentValue)
    // this.propertyForm.patchValue({
    //   userId: changes.ownerId.currentValue
    // })

    //console.log(this.propertyForm.value)
  }
}
