import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { timeout } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-applicant-detail',
  templateUrl: './applicant-detail.component.html',
  styleUrls: ['./applicant-detail.component.scss']
})
export class ApplicantDetailComponent implements OnInit {

  userId: string;
   formData = new FormData();
  personalForm: FormGroup;
  guardianForm : FormGroup;

  constructor(private _authService: AuthService, private _toastr: ToastrService, private _fb: FormBuilder, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit(): void {
    this.userId = this._route.snapshot.paramMap.get('id');
    console.log(typeof(this.userId))
    this.loadForms();
 
  }


  loadForms(){

   this.personalForm =  this._fb.group({

      owner: this.userId,
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      otherNames: new FormControl('', Validators.required),
      dob: new FormControl('', Validators.required),
      occupation: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      uploadDocument: new FormControl('', Validators.required)
    
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

    //mergin formbuilders
    let data = {...this.personalForm.value, ...this.guardianForm.value}
    let result = Object.assign({}, data);

    //pushing data to formdata
    for (let o in result) {
            this.formData.append(o, result[o])
    }
    console.log(this.formData)

    //saving info
    this._authService.saveDetails(this.formData).subscribe(data=>{
      this._router.navigate(['/applicant/show_programs']);
      this._toastr.success("Welcome to University 🙂","",{
        timeOut:2000
      })
    }, error => {
      console.error(error)
      this._toastr.info("An error occured ","Aw snap!",{
        timeOut:2000
      })
    })



  }


  uploadFile(file: File){

    if(file.type != 'application/pdf'){
      this._toastr.error("Only pdf allowed", "Oops ...",{timeOut:3000})
      this.personalForm.controls['schoolDocument'].setErrors({'incorrect': true});
    }else{

      //appending file to formdata
      this.formData.append('schoolDocument', file, file.name)

    }
   

  }
}
