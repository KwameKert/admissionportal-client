import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CrudService } from 'src/app/modules/shared/service/crud-service.service';
import { ToastrService } from 'ngx-toastr';
import { NgxUiLoaderService } from 'ngx-ui-loader';


@Component({
  selector: 'app-make-deposit',
  templateUrl: './make-deposit.component.html',
  styleUrls: ['./make-deposit.component.scss']
})
export class MakeDepositComponent implements OnInit {
  
  customStripeForm: FormGroup;
  submitted: boolean;
  formProcess: boolean;
  message: string;


  constructor(private _crudService: CrudService,
    private _fb: FormBuilder, private _toastr: ToastrService,   private ngxService: NgxUiLoaderService,) { }

  ngOnInit(): void {
    this.loadStripe();

    this.customStripeForm = this._fb.group({
        cardNumber:  new FormControl('', Validators.required),
        expMonth: new FormControl('', Validators.required),
        expYear:  new FormControl('', Validators.required),
        cvv: new FormControl('', [Validators.required, Validators.maxLength(4)])
    })
  }

  loadStripe() {
   
    if(!window.document.getElementById('stripe-custom-form-script')) {
      var s = window.document.createElement("script");
      s.id = "stripe-custom-form-script";
      s.type = "text/javascript";
      s.src = "https://js.stripe.com/v2/";
      s.onload = () => {
        window['Stripe'].setPublishableKey('pk_test_aeUUjYYcx4XNfKVW60pmHTtI');
      }
       
      window.document.body.appendChild(s);
    }
  }

  	
pay(form) {
 
  if(!window['Stripe']) {
    alert('Oops! Stripe did not initialize properly.');
    return;
  }
   
  this.submitted = true;
 
  console.log(this.customStripeForm);
  if (this.customStripeForm.invalid) {      
    return;
  }   
 
  this.formProcess = true;
  console.log("form");
  console.log(form);
  if(!window['Stripe']) {
    alert('Oops! Stripe did not initialize properly.');
    return;
  }
  (<any>window).Stripe.card.createToken({
    number: form.cardNumber,
    exp_month: form.expMonth,
    exp_year: form.expYear,
    cvc: form.cvc
  }, (status: number, response: any) => {
    this.submitted = false;
    this.formProcess = false;
    if (status === 200) {
      this.message = `Success! Card token ${response.card.id}.`;
    } else {
      this.message = response.error.message;
    }
  });
}
}
