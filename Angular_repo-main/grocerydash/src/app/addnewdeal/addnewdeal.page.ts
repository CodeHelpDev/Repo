import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../services/common.service';

declare var jQuery: any
@Component({
  selector: 'app-addnewdeal',
  templateUrl: './addnewdeal.page.html',
  styleUrls: ['./addnewdeal.page.scss'],
})
export class AddnewdealPage implements OnInit {
  addNewDealForm: FormGroup = new FormGroup({});
  imageUrl: any;
  toggleDealType: any;
  storedCatArray: any = [];
  productDataArray: any = [];
  constructor(
    public router: Router,
    public com: CommonService
  ) { }

  async ngOnInit() {
    this.addNewDealForm = new FormGroup({
      dealType: new FormControl('', Validators.required),
      title: new FormControl('', Validators.required),
      dealOffer: new FormControl('', Validators.required),
      topdeal: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      image: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required)
    })
    var storedCatData: any = await this.com.getCategory();
    storedCatData = JSON.parse(storedCatData);
    if (storedCatData) {
      this.storedCatArray = storedCatData
    }

    var storedProduct: any = await this.com.getProductsData();
    storedProduct = JSON.parse(storedProduct);
    if (storedProduct) {
      this.productDataArray = storedProduct;
    }


  }
  async onFormSubmit(formValue: any) {
    console.log(formValue)
    var storedDeals: any = await this.com.getDeals();
    storedDeals = JSON.parse(storedDeals);
    console.log('storedDeals', storedDeals);
    if (storedDeals) {
      var stored:any = storedDeals.find((x:any)=>{
        if(x.title===formValue.title){
          return x;
        }
      })
      if(stored){
        this.com.showAlert('Title name is duplicate ','Please Select another title Name')
      }else{
        storedDeals = storedDeals.concat(formValue);
        this.com.setDeals(storedDeals);
      }
    } else {
      this.com.setDeals([formValue]);
    }
    this.addNewDealForm.reset();
    this.router.navigate(['/deals']);
  }
  setImageInForm(event: any) {
    var file = event.srcElement.files[0]
    console.log(file);
    var reader = new FileReader();
    var self = this;
    reader.onloadend = function () {
      self.imageUrl = reader.result;
      self.addNewDealForm.controls['image'].setValue(self.imageUrl)
    }
    reader.readAsDataURL(file);
  }

  onChangeDealType(event: any) {
    var data: any = event.detail.value;
    if (this.addNewDealForm.controls['product']) {
      this.addNewDealForm.removeControl('product')
    }
    if (this.addNewDealForm.controls['category']) {
      this.addNewDealForm.removeControl('category');
    }
    this.addNewDealForm.addControl(data, new FormControl(''));
    this.toggleDealType = data;
    console.log(data, event.target.value);
  }
  openFileUpload() {
    jQuery("#imageUpload").trigger('click');
  }
  onCancelButton() {
    this.addNewDealForm.reset();
    this.router.navigate(['/deals']);
  }
}

