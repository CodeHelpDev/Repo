import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../services/common.service';

declare var jQuery: any
@Component({
  selector: 'app-updatebanner',
  templateUrl: './updatebanner.page.html',
  styleUrls: ['./updatebanner.page.scss'],
})
export class UpdatebannerPage implements OnInit {
  productDetails: any;
  imageUrl: any;
  updateBannerForm:FormGroup= new FormGroup({});
  toggleCon:any;
  storedData:any=[];
  bannerForModel:any;
  allProduct:any=[];
  allCategory:any =[];
  constructor(
    public router: Router,
    public com:CommonService
  ) { }

  async ngOnInit() {
    console.log('this.ngOnInit')
    this.updateBannerForm = new FormGroup({
      title:new FormControl('',Validators.required),
      description: new FormControl('',Validators.required),
      bannerFor :new FormControl('',Validators.required),
      image: new FormControl('',Validators.required)
    })
    var data: any = this.router.getCurrentNavigation()?.extras.state;
    this.productDetails = data.data;
    console.log(this.productDetails);
    var ky:any = Object.keys(this.productDetails);
    var con =  ky.find((x:any)=>(x=='category') || (x=='product'));
    console.log(ky,con)
    this.toggleCon = con;
    this.updateBannerForm.addControl(this.toggleCon, new FormControl('',Validators.required));
    if(this.productDetails){
      this.setFormValue();
    }
    var storedBanner:any = await this.com.getBannerData();
    storedBanner = JSON.parse(storedBanner);
    console.log(storedBanner);
    if(storedBanner){
      this.storedData=storedBanner;
    }
    var storeProduct:any = await this.com.getProductsData();
    storeProduct = JSON.parse(storeProduct);
    console.log(storeProduct)
    if(storeProduct){
      this.allProduct= storeProduct;
    }

    var storedCat:any = await this.com.getCategory();
    storedCat = JSON.parse(storedCat);
    console.log(storedCat)
    if(storedCat){
      this.allCategory = storedCat;
    }
 
  }
  ionViewWillEnter(){
    console.log('ionViewWillEnter');
  }
  setFormValue(){
    console.log(this.toggleCon)
    this.updateBannerForm.controls['title'].setValue(this.productDetails.title);
    this.updateBannerForm.controls['description'].setValue(this.productDetails.description);
    this.updateBannerForm.controls['bannerFor'].setValue(this.productDetails.bannerFor);
    this.updateBannerForm.controls[this.toggleCon].setValue(this.productDetails[this.toggleCon]);
    this.updateBannerForm.controls['image'].setValue(this.productDetails.image);
    this.imageUrl=this.productDetails.image;  
  }
 async changeSelectValue(toggleCon:any){
    if(toggleCon==='product'){
      this.updateBannerForm.addControl(toggleCon,new FormControl(''))
      this.updateBannerForm.removeControl('category');
    }
    if(toggleCon==='category'){
      this.updateBannerForm.addControl(toggleCon,new FormControl(''))
      this.updateBannerForm.removeControl('product');
    }
    console.log(toggleCon)

  }

  imageUpload(event: any) {
    var file: any = event.srcElement.files[0]
    console.log(file)
   if(file){}
   var reader = new FileReader();
   var self = this;
   reader.onloadend = function () {
    self.imageUrl=reader.result;
     console.log(reader.result);
   }
   reader.readAsDataURL(file);
  }
  openFileUpload() {
    jQuery('#file-upload').trigger('click');
  }
  onFormSubmit(formValue:any){
    if(this.storedData){
      var index:any = this.storedData.findIndex((x:any)=>x.title===formValue.title);
      this.storedData.splice(index,1,formValue);
      this.com.setBannerData(this.storedData);
      this.updateBannerForm.reset();
      this.router.navigate(['/banner']);
    }
    console.log(formValue)
  }
}
