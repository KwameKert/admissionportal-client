import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {FormControl, Validators, FormGroup, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { ToastrService } from 'ngx-toastr';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup ;
  isLoading: boolean = false;
  @ViewChild("password") password: ElementRef;
  @ViewChild("confirmPassword") confirmPassword: ElementRef;

  constructor(private router: Router, private _fb: FormBuilder, private _authService: AuthService,  private _toastr: ToastrService) { }

  

  ngOnInit() {
    this.registerForm = this._fb.group({
      username: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      role: 'applicant',
      password: new FormControl('', Validators.required)
    })
  }

  registerUser(){

    this.isLoading = true;

    this._authService.registerUser(this.registerForm.value).subscribe(data=>{

      let authData = {
        userId: data.user.id,
        token: data.token,
        username: data.user.username,
        role: data.user.role,
        isActivated: data.user.isActivated
    }

    //saving user details 
    this._authService.setUserDetails(authData);

    //routing to applicant dashboard
    this.router.navigate([`/applicant_details/${authData.userId}`]).then(()=>{
      this._toastr.success("Registeration successfull 🙂","",{
        timeOut:2000
      })
    });


    }, error=> {
  
      console.error("error ",error)
  
    
    }).add(()=>{
      this.isLoading = false;
    });
    
  }


  checkPass(){
    let pass = this.password.nativeElement.value
    let confirm = this.confirmPassword.nativeElement.value

    if(pass == confirm){
      this.registerForm.patchValue({
        password: pass
      })
  
      this.password.nativeElement.classList.add('is-valid');
      this.password.nativeElement.classList.remove('is-invalid');
      this.confirmPassword.nativeElement.classList.add('is-valid');
      this.confirmPassword.nativeElement.classList.remove('is-invalid');
    
    }else{
    
      this.password.nativeElement.classList.add('is-invalid');
      this.password.nativeElement.classList.remove('is-valid');
      this.confirmPassword.nativeElement.classList.add('is-invalid');
      this.confirmPassword.nativeElement.classList.remove('is-valid');


    }

  }

}
