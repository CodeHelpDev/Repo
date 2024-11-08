import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../services/common.service';

declare var jQuery: any;
@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.page.html',
  styleUrls: ['./updateproduct.page.scss'],
})
export class UpdateproductPage implements OnInit {
  updateProductForm: FormGroup = new FormGroup({});
  imageArray: any = [];
  product:any;
  constructor(
    public router: Router,
    public com:CommonService
  ) { }

  ngOnInit() {
    this.updateProductForm = new FormGroup({
      name: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      quantity: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      image: new FormControl('', Validators.required)
    })
    var data: any = this.router.getCurrentNavigation()?.extras.state;
    if(data.data){
      this.product = data.data;
      this.setFormValues();
    }
    console.log(data.data);
  }
  setFormValues(){
    this.imageArray = this.product.image
    this.updateProductForm = new FormGroup({
      name: new FormControl(this.product.name, Validators.required),
      price: new FormControl(this.product.price, Validators.required),
      quantity: new FormControl(this.product.quantity, Validators.required),
      description: new FormControl(this.product.description, Validators.required),
      image: new FormControl(this.product.image, Validators.required)
    })

  }
  deleteImage(index:any){
    this.imageArray.splice(index,1);
    this.updateProductForm.controls['image'].setValue(this.imageArray)
  }
  
  openFileUpload() {
    jQuery('#file').trigger('click');
  }
  setImages(event:any){
    var files = event.srcElement.files;
    console.log(files);
    if(files.length<4){
      for (let i = 0; i < files.length; i++) {
        this.convertToBase64(files[i],i);
      }
    }
  }
  convertToBase64(file:any,index:any){
    var reader = new FileReader();
    var self =this;
    reader.onloadend = function(){
      if(self.imageArray.length===0){
        self.imageArray[index]=reader.result;
      }if(self.imageArray.length>0){
        self.imageArray[self.imageArray.length] = reader.result
      }
      self.updateProductForm.controls['image'].setValue(self.imageArray);
      console.log(self.imageArray);
    }
    reader.readAsDataURL(file)

  }
  async onSubmit(formValue:any ){
    var storedProducts:any = await this.com.getProducts();
    storedProducts = JSON.parse(storedProducts);
    console.log(storedProducts)
    if(storedProducts){
      var index:any = storedProducts.findIndex((x:any)=>x.name===formValue.name);
      storedProducts.splice(index,1,formValue);
      this.com.setProducts(storedProducts);
      this.updateProductForm.reset();
      this.router.navigate(['/viewproducts'])
    }
    console.log(formValue)
    
  }


}
