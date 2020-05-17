import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup ;
  isLoading: boolean = false;
  constructor(private router: Router, private _fb: FormBuilder, private _authService: AuthService,  private _toastr: ToastrService) { }

  

  ngOnInit() {
    this.registerForm = this._fb.group({
      username: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  }

  loginUser(){

    this.isLoading = true;

    this._authService.registerUser(this.registerForm.value).subscribe(data=>{

      let authData = {
        userId: data.user.id,
        token: data.token,
        username: data.user.username,
        role: data.user.role,
        isActivated: data.user.isActivated
    }
    
    this._authService.setUserDetails(authData);

  //  console.log(authData)
    switch(authData.role){

      case "admin":
        this.router.navigate(['/admin/dashboard']);
        break;

      case "applicant":
        if(!authData.isActivated){
          this.router.navigate([`/applicant_details/${authData.userId}`])

        }else{

          this.router.navigate(['/applicant/show_programs']);
          this._toastr.success("Welcome to University 🙂","",{
            timeOut:2000
          })
        }
        break;
    }


    }, error => {
  
      console.error("error ",error)
  
    
    },);

    this.isLoading = false;
  
  

  
    
  }

}
