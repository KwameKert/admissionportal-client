import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CrudService } from 'src/app/modules/shared/service/crud-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-program',
  templateUrl: './add-program.component.html',
  styleUrls: ['./add-program.component.scss']
})
export class AddProgramComponent implements OnInit {

  programForm: FormGroup;

  fileData: File = null;
  previewUrl:any = null;
  formData = new FormData();
  
  @Output() newProgram: EventEmitter<boolean> = new EventEmitter();

  constructor(private _crudService: CrudService, private _fb: FormBuilder, private _toastr: ToastrService) { }

  ngOnInit(): void {

    this.programForm = this._fb.group({
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      endDate: new FormControl('', Validators.required),
      faculty:  new FormControl('', Validators.required),
      length:  new FormControl('', Validators.required),
      status: new FormControl('', Validators.required)
    })
  }


  saveProgram(){

    this._crudService.addItem(this.programForm.value,"program").subscribe(data=>{

      this._toastr.success(data.message, "Success  😊", {  timeOut:2000});
      this.newProgram.emit(true)
    }, error=> {
    this._toastr.info("Ooops", "Unexpected Error  🥺", {  timeOut:5000});
      console.error(error)
    })
  }


  fileProgress(fileInput: any) {
    this.fileData = <File>fileInput.target.files[0];
    this.formData.append('image', this.fileData, this.fileData.name);
    this.preview();
  }


  preview() {
    // Show preview 
    var mimeType = this.fileData.type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }
    
    var reader = new FileReader();      
    reader.readAsDataURL(this.fileData); 
    reader.onload = (_event) => { 
      this.previewUrl = reader.result; 
    }
    }



  // uploadImage(){

  //   return new Promise((resolve,reject)=>{
  //     this._imageService.uploadImage(this.formData).subscribe(data =>{
  //       let response: any = data
  //       this.leaderForm.patchValue({
  //         image_url: response.data.link
  //       });
  //       resolve(true)
  //     }, error=>{
  //       console.warn(error)
  //       reject(false)
  //     })


  //   })
  

  // }



  persitData(){

    // this._crudService.addItem(this.leaderForm.value, "leader")
    // .subscribe(data => {
    //   this.responseData = data;
    //   this.leaderForm.reset();
    //   this.previewUrl = null;
    // }, error => {

    // console.warn(error)
    // })
  }



  // saveLeader = async () =>{
    
  //   //this.ngxService.start();

  //   if(this.formData){
  //     await this.uploadImage().then(()=>{
  //       this.persitData();
  //     }).catch(()=>{
  //       this.persitData()
  //     })
  //   }else{
  //     this.persitData()
  //   }
    
    
  //  // this.ngxService.stop()
   
  // }


}
