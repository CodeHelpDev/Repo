import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../services/common.service';

declare var jQuery: any
@Component({
  selector: 'app-addnewbanner',
  templateUrl: './addnewbanner.page.html',
  styleUrls: ['./addnewbanner.page.scss'],
})
export class AddnewbannerPage implements OnInit {
  imageUrl: any;
  addNewBannerForm: FormGroup = new FormGroup({});
  bannerToggle: any;
  categoryData: any = [];
  productData: any = [];
  toggleArrayData: any = []
  constructor(
    public router: Router,
    public com: CommonService

  ) { }

  async ngOnInit() {
    this.addNewBannerForm = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      bannerFor: new FormControl('', Validators.required),
      image: new FormControl('', Validators.required)
    })

    var storedCat: any = await this.com.getCategory();
    storedCat = JSON.parse(storedCat);
    console.log(storedCat);
    this.categoryData = storedCat;

    var storedProduct: any = await this.com.getProductsData();
    storedProduct = JSON.parse(storedProduct);
    console.log(storedProduct);
    this.productData = storedProduct;
  }

  uploadImage(event: any) {
    var file = event.srcElement.files[0];
    console.log(file);
    var reader = new FileReader();
    var self = this;
    reader.onloadend = function () {
      self.imageUrl = reader.result;
      console.log(self.imageUrl);
      self.addNewBannerForm.controls['image'].setValue(self.imageUrl)
    }
    reader.readAsDataURL(file);
  }
  openFileUpload() {
    jQuery("#fileupload").trigger('click');
  }
  onCancel() {
    this.addNewBannerForm.reset();
    this.router.navigate(['/banner']);
  }
  async onFormSubmit(formValue: any) {
    var storedBanner:any = await this.com.getBannerData();
    storedBanner = JSON.parse(storedBanner);
    if(storedBanner){
      storedBanner = storedBanner.concat(formValue);
      this.com.setBannerData(storedBanner);
    }else{
      this.com.setBannerData([formValue]);
    }
    this.addNewBannerForm.reset();
    this.router.navigate(['/banner']);
  }
  handleChange(event: any) {
    var value: any = event.detail.value;
    console.log(value)
    if(this.bannerToggle){
      this.addNewBannerForm.removeControl(this.bannerToggle);
    }
    this.bannerToggle =undefined
    this.bannerToggle = value
    this.addNewBannerForm.addControl(value,new FormControl(''))
      if(this.bannerToggle==='product'){
        this.toggleArrayData = this.productData;
      }if(this.bannerToggle==='category'){
        this.toggleArrayData = this.categoryData
      }  
    }
}
