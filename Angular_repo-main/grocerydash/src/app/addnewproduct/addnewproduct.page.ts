import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../services/common.service';
import { Router } from '@angular/router';
import { consumerPollProducersForChange } from '@angular/core/primitives/signals';

declare var jQuery: any;

@Component({
  selector: 'app-addnewproduct',
  templateUrl: './addnewproduct.page.html',
  styleUrls: ['./addnewproduct.page.scss'],
})
export class AddnewproductPage implements OnInit {
  addNewProduxtForm: FormGroup = new FormGroup({});
  storedStock:any=[];
  constructor(
    public formBuilder: FormBuilder,
    public com: CommonService,
    public router: Router
  ) { }

  async ngOnInit() {
    this.addNewProduxtForm = this.formBuilder.group({
      id: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      keywords: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      stockunit: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      subCategory: new FormControl('', Validators.required),
      image: new FormControl('', Validators.required),
      stockDetails: this.formBuilder.array([]),
    })
    this.addControls();

    var storedData: any = await this.com.getProductsData();
    storedData = JSON.parse(storedData);
    if (storedData) {
      this.storedStock = storedData
      console.log(this.storedStock.length)
    }
  }
  async onFormSubmit(formValue: any) {
    console.log(this.storedStock)
    formValue.id= this.storedStock.length
    console.log(formValue);
    if(this.storedStock){
      console.log(formValue)
      this.storedStock = this.storedStock.concat(formValue);
      // this.com.setProductsData(this.storedStock);
    }else{
      // this.com.setProductsData([formValue])
    }
    // this.addNewProduxtForm.reset();
    // this.router.navigate(['/products']);
  }
  onCancelButton() {
    this.addNewProduxtForm.reset();
    this.router.navigate(['/products'])
  }

  addControls() {
    var item = this.formBuilder.group({
      capacity: ['', Validators.required],
      price: ['', Validators.required],
      dealOffer: ['', Validators.required],
      stock: ['', Validators.required],
      subscribe: ['', Validators.required],
    })
    this.stockDetails.push(item);
  }
  get stockDetails(): FormArray {
    return this.addNewProduxtForm.get('stockDetails') as FormArray;
  }
  removeControls(index: any) {
    console.log(index);
    if (index > 0) {
      this.stockDetails.removeAt(index);
    } else {
      this.com.checkConfirm('You Must Have to Enter', 'First One is Mandatery')
    }
  }
  openFileUpload() {
    jQuery("#imageUpload").trigger('click')
  }
  setImageInForm(event: any) {
    var file: any = event.srcElement.files[0];
    var reader = new FileReader();
    var self = this;
    reader.onloadend = function () {
      console.log('result', reader.result);
      self.addNewProduxtForm.controls['image'].setValue(reader.result);

    }
    reader.readAsDataURL(file);
    console.log(file)

  }
}
