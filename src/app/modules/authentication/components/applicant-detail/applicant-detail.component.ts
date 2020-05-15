import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { CrudService } from 'src/app/modules/shared/service/crud-service.service';
import { ToastrService } from 'ngx-toastr';
import { timeout } from 'rxjs/operators';

@Component({
  selector: 'app-applicant-detail',
  templateUrl: './applicant-detail.component.html',
  styleUrls: ['./applicant-detail.component.scss']
})
export class ApplicantDetailComponent implements OnInit {

  personalForm: FormGroup;
  guardianForm : FormGroup;
  documentForm: FormGroup;

  constructor(private _crudService: CrudService, private _toastr: ToastrService, private _fb: FormBuilder) { }

  ngOnInit(): void {

   this.personalForm =  this._fb.group({

      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      otherNames: new FormControl('', Validators.required),
      dob: new FormControl('', Validators.required),
      occupation: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      schoolDocument: new FormControl('', Validators.required)
    
    })


    this.guardianForm = this._fb.group({
      motherName: '',
      motherPhone: '',
      motherAddress: '',
      fatherName: '',
      fatherPhone: '',
      fatherAddress: '',
    })

 

  }


  saveData(){
    let data = {...this.personalForm.value, ...this.guardianForm.value}
    console.log(data)
  }


  uploadFile(file: File){

    if(file.type != 'application/pdf'){
      this._toastr.error("Only pdf allowed", "Oops ...",{timeOut:3000})
      this.personalForm.controls['schoolDocument'].setErrors({'incorrect': true});
    }else{
      let formData = new FormData();
      formData.append('image', file, file.name)

      this.personalForm.patchValue({
        schoolDocument: formData
      })

    }
   // console.log(file.type);

  }
}
