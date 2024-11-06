import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../services/common.service';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.page.html',
  styleUrls: ['./updateproduct.page.scss'],
})
export class UpdateproductPage implements OnInit {
  updateDataForm: FormGroup = new FormGroup({});
  product: any;
  constructor(
    public router: Router,
    public com: CommonService,
    public formBuilder: FormBuilder
  ) { }

  async ngOnInit() {
    this.updateDataForm = this.formBuilder.group({
      id: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      keywords: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      stockunit: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      subCategory: new FormControl('', Validators.required),
      image: new FormControl('',Validators.required),
      stockDetails: this.formBuilder.array([])
    })
    this.addControls();
    var data: any = this.router.getCurrentNavigation()?.extras.state;
    console.log(data.data);
    this.product = data.data;
  }
  ionViewWillEnter(){
    if (this.product) {
      this.setformValues();
    }
  }
  addControls() {
    var item = this.formBuilder.group({
      capacity: [''],
      price: [''],
      dealOffer: [''],
      stock: [''],
      subscribe: ['']
    })
    this.stockDetails.push(item)
  }

  get stockDetails() {
    return this.updateDataForm.get('stockDetails') as FormArray;
  }
  setformValues() {
    this.updateDataForm = new FormGroup({
      id: new FormControl(this.product.id, Validators.required),
      name: new FormControl(this.product.name, Validators.required),
      keywords: new FormControl(this.product.keywords, Validators.required),
      description: new FormControl(this.product.description, Validators.required),
      stockunit: new FormControl(this.product.stockunit, Validators.required),
      category: new FormControl(this.product.category, Validators.required),
      subCategory: new FormControl(this.product.subCategory, Validators.required),
      image: new FormControl(this.product.image,Validators.required),
      stockDetails: this.formBuilder.array([])
    })
    this.addControls1();
  }
  addControls1() {
    console.log('this.product', this.product.stockDetails);
    if (this.product.stockDetails!==undefined) {
      var item1 = this.formBuilder.group({
        capacity: [this.product.stockDetails[0].capacity, Validators.required],
        price: [this.product.stockDetails[0].price, Validators.required],
        dealOffer: [this.product.stockDetails[0].dealOffer, Validators.required],
        stock: [this.product.stockDetails[0].stock, Validators.required],
        subscribe: [this.product.stockDetails[0].subscribe, Validators.required],
      })
      this.stockDetails.push(item1)
    } else {
      console.log('else')
      var item = this.formBuilder.group({
        capacity: [this.product.capacity, Validators.required],
        price: [this.product.price, Validators.required],
        dealOffer: [this.product.dealOffer, Validators.required],
        stock: [this.product.stock, Validators.required],
        subscribe: [this.product.subscribe, Validators.required],
      })
      this.stockDetails.push(item)
    }

  }
  async onFormSubmit(formValue: any) {
    console.log('formValue',formValue);
    var storedProduct: any = await this.com.getProductsData();
    storedProduct = JSON.parse(storedProduct);
    console.log(storedProduct);
    if (storedProduct) {
      var index: any = storedProduct.findIndex((x: any) => x.id === formValue.id);
      storedProduct.splice(index, 1, formValue);
      this.com.setProductsData(storedProduct);
      this.updateDataForm.reset();
      this.router.navigate(['/products']);
    } else {
      console.log('Data Not Found');
    }
    console.log(formValue);

  }
  getItemsControls() {
    return (this.updateDataForm.get('stockDetails') as FormArray).controls;
  }
  onCancelButton(){
    this.updateDataForm.reset();
    this.router.navigate(['/products']);
  }

}
