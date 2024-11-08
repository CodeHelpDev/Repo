import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../services/common.service';

declare var jQuery:any;
@Component({
  selector: 'app-addproducts',
  templateUrl: './addproducts.page.html',
  styleUrls: ['./addproducts.page.scss'],
})
export class AddproductsPage implements OnInit {
  addProductForm:FormGroup= new FormGroup({});
  imageArray:any=[];
  isImageExceeded:boolean=false;
  alertButtons=[
    {
      text:'Cancel',
      handler:()=>{
        console.log('Cancel');
      }
    },
    {
      text:'Ok',
      handler:()=>{
        console.log('Ok') 
      }
    }
  ]
  constructor(
    public com:CommonService
  ) { }

  ngOnInit() {
    this.addProductForm = new FormGroup({
      name: new FormControl('',Validators.required),
      price: new FormControl('',Validators.required),
      quantity: new FormControl('',Validators.required),
      description: new FormControl('',Validators.required),
      image: new FormControl('',Validators.required)
    })
  }
  setImages(event:any){
    this.imageArray=[];
    this.addProductForm.controls['image'].setValue('');
    var files = event.srcElement.files;
    console.log(files);
    if(files.length<=3){
      for (let i = 0; i < files.length; i++) {      
        this.convertToBase64(files[i],i)
      }
    }else{
      this.isImageExceeded=true;
    }
  }
  convertToBase64(file:any,index:any){
    var reader = new FileReader();
    var self = this;
    reader.onloadend= function(){
      self.imageArray[index]= reader.result;
      console.log('self.imageArray',self.imageArray)
      self.addProductForm.controls['image'].setValue(self.imageArray)
    }
    reader.readAsDataURL(file)
  }
  openFileUpload(){
    jQuery('#file').trigger('click');
  }
  async onSubmit(formValue:any){
    var storedProducts:any = await this.com.getProducts();
    storedProducts = JSON.parse(storedProducts);
    if(storedProducts){
      storedProducts = storedProducts.concat(formValue);
      this.com.setProducts(storedProducts);
      this.resetPage();
    }else{
      this.com.setProducts([formValue])
      this.resetPage();
    }
  }

  resetPage(){
    this.imageArray=[]
    this.addProductForm.reset();
  }
}
