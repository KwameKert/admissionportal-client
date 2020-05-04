import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup ;
  isLoading: boolean = false;
  constructor(private router: Router, private _fb: FormBuilder) { }

  

  ngOnInit() {
    this.loginForm = this._fb.group({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  }

  loginUser(){
    this.isLoading = true;
    this.router.navigate(['dashboard']);
  }

}
