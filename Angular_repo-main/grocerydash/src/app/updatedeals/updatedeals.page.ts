import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../services/common.service';

declare var jQuery: any
@Component({
  selector: 'app-updatedeals',
  templateUrl: './updatedeals.page.html',
  styleUrls: ['./updatedeals.page.scss'],
})
export class UpdatedealsPage implements OnInit {
  updateDealsForm: FormGroup = new FormGroup({});
  imageUrl: any;
  storedCatArray: any;
  product: any;
  toggleControl: any;
  categoryArray: any;
  productArray: any;
  constructor(
    public router: Router,
    public com: CommonService
  ) { }

  async ngOnInit() {
    this.updateDealsForm = new FormGroup({
      dealType: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      product: new FormControl('', Validators.required),
      title: new FormControl('', Validators.required),
      dealOffer: new FormControl('', Validators.required),
      topdeal: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      image: new FormControl('', Validators.required)
    })
    var data: any = this.router.getCurrentNavigation()?.extras.state;
    if (data.data) {
      this.product = data.data
      console.log(this.product)
    }
    var catData: any = await this.com.getCategory();
    catData = JSON.parse(catData);
    if (catData) {
      this.categoryArray = catData
    }

    var proData: any = await this.com.getProductsData();
    proData = JSON.parse(proData);
    if (proData) {
      this.productArray = proData
    }
  }
  ionViewWillEnter() {
    console.log('this.ionViewWillEnter');
    this.imageUrl = this.product.image
    if (this.product.dealType === 'category') {
      this.toggleControl = this.product.dealType;
      this.updateDealsForm = new FormGroup({
        dealType: new FormControl(this.product.dealType, Validators.required),
        category: new FormControl(this.product.category, Validators.required),
        title: new FormControl(this.product.title, Validators.required),
        dealOffer: new FormControl(this.product.dealOffer, Validators.required),
        topdeal: new FormControl(this.product.topdeal, Validators.required),
        description: new FormControl(this.product.description, Validators.required),
        image: new FormControl(this.product.image, Validators.required)
      })
    }
    if (this.product.dealType === 'product') {
      this.toggleControl = this.product.dealType;
      this.updateDealsForm = new FormGroup({
        dealType: new FormControl(this.product.dealType, Validators.required),
        product: new FormControl(this.product.product, Validators.required),
        title: new FormControl(this.product.title, Validators.required),
        dealOffer: new FormControl(this.product.dealOffer, Validators.required),
        topdeal: new FormControl(this.product.topdeal, Validators.required),
        description: new FormControl(this.product.description, Validators.required)
      })
    }
  }
  async onFormSubmit(formValue: any) {
    var storedDeals:any = await this.com.getDeals();
    storedDeals = JSON.parse(storedDeals);
    if(storedDeals){
     var index = storedDeals.findIndex((x:any)=>x.title===formValue.title);
     storedDeals.splice(index,1,formValue);
     this.com.setDeals(storedDeals);
    }
    console.log(formValue);
    this.updateDealsForm.reset();
    this.router.navigate(['/deals']);
  }
  onCancelButton() {
    this.updateDealsForm.reset();
    this.router.navigate(['deals']);
  }

  setImageInForm(event: any) {
    var file = event.srcElement.files[0];
    console.log(event, file)
  }
  openFileUpload() {
    jQuery("imageUpload").trigger('click');
  }
}

