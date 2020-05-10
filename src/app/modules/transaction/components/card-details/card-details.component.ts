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
        cardNumber:  new FormControl('', [Validators.required, Validators.maxLength(30), Validators.minLength(16)]),
        expMonth: new FormControl('', Validators.required),
        expYear:  new FormControl('', Validators.required),
        cvv: new FormControl('', [Validators.required, Validators.maxLength(4)])
    })
  }

    
  cardNumberKey(){
  
    console.log(this.cardNumber)

    if ($.payform.validateCardNumber(this.cardNumber) == false) {
      console.log("error")
        this.cardNumberField.nativeElement.classList.remove('has-success');
        this.cardNumberField.nativeElement.classList.add('has-error');
    } else {
      
        this.cardNumberField.nativeElement.classList.remove('has-error');
        this.cardNumberField.nativeElement.classList.add('has-success');
    }

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
        // Everything is correct. Add your form submission code here.
        this._toastr.success("Correct Form", "Success  😊", {  timeOut:2000});
    }


  }







}
