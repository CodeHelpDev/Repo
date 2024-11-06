import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../services/common.service';

declare var jQuery:any
@Component({
  selector: 'app-addnewcategory',
  templateUrl: './addnewcategory.page.html',
  styleUrls: ['./addnewcategory.page.scss'],
})
export class AddnewcategoryPage implements OnInit {
  imageValue:any;
  addNewCatForm: FormGroup= new FormGroup({});
  constructor(
    public router:Router,
    public com:CommonService
  ) { }

  ngOnInit() {
    this.addNewCatForm= new FormGroup({
      title:new FormControl('',Validators.required),
      description: new FormControl('',Validators.required),
      image : new FormControl('',Validators.required)
    })
  }

  imageUpload(){
    jQuery('#image-upload').trigger('click')
  }
  imageChange(event:any){
    var file = event.srcElement.files[0];
   if(file){
    var reader = new FileReader();
    var self = this;
    reader.onloadend = function(){
      console.log('Result',reader.result)
      self.imageValue=reader.result;
      self.addNewCatForm.controls['image'].setValue(self.imageValue);
    }
    reader.readAsDataURL(file);
   }
  }
  onCancel(){
    this.addNewCatForm.reset();
    this.router.navigate(['/categories']);
  }
  async onFormSubmit(formValue:any){
    var storedCategory:any = await this.com.getCategory();
    storedCategory = JSON.parse(storedCategory);
    if(storedCategory){
      storedCategory = storedCategory.concat(formValue);
      this.com.setCategory(storedCategory);
    }else{
      this.com.setCategory([formValue]);
    }
    this.addNewCatForm.reset();
    this.router.navigate(['/categories']);
    console.log(formValue);
  }
}
