import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CrudService } from 'src/app/modules/shared/service/crud-service.service';
import { ToastrService } from 'ngx-toastr';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

declare var $: any;

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent implements OnInit {

   
  cardForm: FormGroup;
  formValid: boolean  = false;
  submitted: boolean;
  formProcess: boolean;
  message: string;
  isLoading: boolean = false;
  owner: any;
  cardNumber :any;;
  @ViewChild('cardNumberField') cardNumberField: ElementRef;
  CVV: any;
  @ViewChild('mastercard') mastercard: ElementRef; 
  @ViewChild('visa') visa: ElementRef; 
  @ViewChild('amex') amex: ElementRef; 
 
  constructor(private _crudService: CrudService,
    private _fb: FormBuilder, private _toastr: ToastrService,   private ngxService: NgxUiLoaderService,   public dialogRef: MatDialogRef<CardDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private el: ElementRef) { }

 
    onNoClick(): void {
      this.dialogRef.close();
    }

  ngOnInit(): void {
  

    this.cardForm = this._fb.group({
        program : new FormControl('', Validators.required),
        amount: new FormControl('', Validators.required),
        method: 'card'
    })
  }


  // on keypress 
    
  cardNumberKey(){
  
   //validate cardnumber with error classes

    if ($.payform.validateCardNumber(this.cardNumber) == false) {
      
        this.cardNumberField.nativeElement.classList.remove('has-success');
        this.cardNumberField.nativeElement.classList.add('has-error');
    } else {
      
        this.cardNumberField.nativeElement.classList.remove('has-error');
        this.cardNumberField.nativeElement.classList.add('has-success');
        this.formValid = true;
    }

    //find card category

    if ($.payform.parseCardType(this.cardNumber) == 'visa') {
      
        this.mastercard.nativeElement.classList.add('transparent');
        this.amex.nativeElement.classList.add('transparent');
    } else if ($.payform.parseCardType(this.cardNumber) == 'amex') {
   
        this.mastercard.nativeElement.classList.add('transparent');
        this.visa.nativeElement.classList.add('transparent');
    } else if ($.payform.parseCardType(this.cardNumber) == 'mastercard') {
      console.log("success")
        this.amex.nativeElement.classList.add('transparent');
        this.visa.nativeElement.classList.add('transparent');
    }
 
  }


  processCard(){
    var isCardValid = $.payform.validateCardNumber(this.cardNumber);
    var isCvvValid = $.payform.validateCardCVC(this.CVV);

    if(this.owner.length < 5){
      this._toastr.info("Wrong owner name", "Unexpected Error  🥺", {  timeOut:5000});
    } else if (!isCardValid) {
      this._toastr.info("Wrong card number", "Unexpected Error  🥺", {  timeOut:5000});
       
    } else if (!isCvvValid) {
      this._toastr.info("Wrong CVV", "Unexpected Error  🥺", {  timeOut:5000});
    
    } else {
        this.saveForm()
    }


  }



  saveForm(){
    let data = {
      amount: this.data.price,
      program: this.data._id
    }

    //submit form
    this._crudService.addItem(data,"program/apply").subscribe(data=>{
      //everything is correct
      this._toastr.success(data.message, "Success  😊", {  timeOut:2000});
      this.dialogRef.close({saved: true});

    }, error=>{
      this._toastr.info("Oops", "Unexpected Error  🥺", {  timeOut:5000});
      console.error(error)
    })
  }





}
