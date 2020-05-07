import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup ;
  isLoading: boolean = false;
  constructor(private router: Router, private _fb: FormBuilder, private _authService: AuthService,  private _toastr: ToastrService) { }

  

  ngOnInit() {
    this.loginForm = this._fb.group({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  }

  loginUser(){
    this.isLoading = true;
    this._authService.loginUser(this.loginForm.value).subscribe(data=>{

      let authData = {
        userId: data.user.id,
        token: data.token,
        username: data.user.username,
        role: data.user.role
    }
    
    this._authService.setUserDetails(authData);

   
    console.log(authData)
    
    switch(authData.role){

      case "admin":
        this.router.navigate(['/admin/dashboard']);
        break;

      case "applicant":
        this.router.navigate(['/applicant/show_programs']);
        break;
    }

    }, error=> {
      console.error(error)
    
      this._toastr.info("Invalid credentials. 🥺","",{
        timeOut:2000
      })
    
    })

    this.isLoading = false;

    this._toastr.success("Welcome to University 🙂","",{
      timeOut:2000
    })
    
  }

}
