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
            this._authService.saveDetails(this.formData).then((result: any)=>{
              console.log(result, typeof(result))
              if(result){
                this._toastr.success("Welcome to University 🙂","",{
                  timeOut:2000
                })

              }else{
                this._toastr.info("An error occured","Oops",{
                  timeOut:2000
                })
              }
           
              this._router.navigate(['/applicant/show_programs']);
            }).catch(error=>{
              this._toastr.error("An error occured","Oops",{
                timeOut:2000
              })
            })
    
    // this._authService.saveDetails(this.formData).subscribe(data=>{
    //     console.log(data)
    // }, error => {
    //   console.error(error)
    // })



  }


  uploadFile(file: File){

    if(file.type != 'application/pdf'){
      this._toastr.error("Only pdf allowed", "Oops ...",{timeOut:3000})
      this.personalForm.controls['schoolDocument'].setErrors({'incorrect': true});
    }else{

             this.formData.append('schoolDocument', file, file.name)


//       var myHeaders = new Headers();
// myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWIzNGQ1YmE1YWZjZjM0ZjAyNWVhOTEiLCJpYXQiOjE1ODk2NTg4MjMsImV4cCI6MTU4OTY2MjQyM30.jRZW_s4AjVf4NTuXQy9dQJ7QqeQgVN0v4WuhHy3hA-Y");

// var formdata = new FormData();
// formdata.append("schoolDocument", file, file.name);
// formdata.append("firstName", "kertice");
// formdata.append("lastName", "asante");

// var requestOptions = {
//   method: 'POST',
//   headers: myHeaders,
//   body: formdata
// };

// fetch("http://localhost:3000/user/applicantDetails/", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));

      // console.log(this.formData.get('schoolDocument'))

      // this._authService.saveDetails(this.formData).subscribe(data=>{

      //   console.log(data)
      // }, error=>{
      //   console.error(error)
      // })


      // this.personalForm.patchValue({
      //   uploadDocument: 'hello'
      // })

      // this._crudService.addItem(this.formData, "user/applicantDetails").subscribe(data=>{
      //     console.log(data)
      // }, error=>{
      //   console.error(error)
      // })

      // console.log(this.personalForm.value)

    }
   // console.log(file.type);

  }
}
