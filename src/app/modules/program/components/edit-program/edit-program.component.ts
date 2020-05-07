import { Component, OnInit, EventEmitter, Output, Input, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CrudService } from 'src/app/modules/shared/service/crud-service.service';
import { ToastrService } from 'ngx-toastr';
import { ImageService } from 'src/app/modules/shared/service/image.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-edit-program',
  templateUrl: './edit-program.component.html',
  styleUrls: ['./edit-program.component.css']
})
export class EditProgramComponent implements OnInit {

  programForm: FormGroup;
  fileData: File = null;
  previewUrl:any = null;
  formData = new FormData();

  @Input() programId : number;
  
  @Output() newProgram: EventEmitter<boolean> = new EventEmitter();

  constructor(private _crudService: CrudService, private _fb: FormBuilder, private _toastr: ToastrService, private _imageService: ImageService, private ngxService: NgxUiLoaderService) { }

  ngOnInit(): void {

  
  }


  loadForm(){
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

  findProgram(id){

      this._crudService.fetchItem({id: id, module: 'program'}).subscribe(data=>{
        let result = data.data;
    
        this.programForm.patchValue({
          _id: result._id,
          name: result.name,
          description: result.description,
          price: result.price,
          endDate: result.endDate,
          faculty:  result.faculty,
          length:  result.length,
          status: result.status
        })

      }, error=>{
        console.error(error);
        this._toastr.info("Ooops", "Program Not found   🥺", {  timeOut:5000});
     
  
      })
  }

 
  async saveProgram(){
    this.ngxService.start();

    if(this.formData){
      await this.uploadImage().then(()=>{
        this.persitData();
      }).catch(()=>{
        this.persitData()
      })
    }else{
      this.persitData()
    }
    
    this.ngxService.stop();

  
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



  uploadImage(){

    return new Promise((resolve,reject)=>{
      this._imageService.uploadImage(this.formData).subscribe(data =>{
        this.programForm.patchValue({
          image_url: data.data.link
          
        })
        resolve(true)
      }, error=>{
        console.warn(error)
        reject(false)
      })


    })
  

  }



  persitData(){

    this._crudService.updateItem({data: this.programForm.value, module: "program", id: this.programId}).subscribe(data=>{

      this._toastr.success(data.message, "Success  😊", {  timeOut:2000});
      this.programForm.reset();
      this.newProgram.emit(true)
    }, error=> {
    this._toastr.info("Ooops", "Unexpected Error  🥺", {  timeOut:5000});
      console.error(error)
    })

   
  }



  ngOnChanges(changes: SimpleChanges) {
    this.loadForm();
    console.log(changes.programId.currentValue)
    this.findProgram(changes.programId.currentValue)
    // this.propertyForm.patchValue({
    //   userId: changes.ownerId.currentValue
    // })

    //console.log(this.propertyForm.value)
  }
}
