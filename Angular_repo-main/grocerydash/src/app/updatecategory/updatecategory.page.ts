import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../services/common.service';

declare var jQuery: any
@Component({
  selector: 'app-updatecategory',
  templateUrl: './updatecategory.page.html',
  styleUrls: ['./updatecategory.page.scss'],
})
export class UpdatecategoryPage implements OnInit {
  imageUrl: any;
  updateCatForm: FormGroup = new FormGroup({});
  productData: any;
  constructor(
    public router: Router,
    public com: CommonService
  ) { }

  ngOnInit() {
    this.updateCatForm = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      image: new FormControl('', Validators.required)
    })
    var data: any = this.router.getCurrentNavigation()?.extras.state;
    this.productData = data.data;
    if (this.productData) {
      this.setFormValue();
    }
    console.log(data.data);
  }

  imageUpload() {
    jQuery('#image-upload').trigger('click')
  }
  onfileChange(event: any) {
    var file = event.srcElement.files[0];
    var reader = new FileReader();
    var self = this;
    reader.onloadend = function () {
      self.imageUrl = reader.result;
      self.updateCatForm.controls['image'].setValue(self.imageUrl)
    }
    reader.readAsDataURL(file)
    console.log(file)
  }
  async onFormSubmit(formValue: any) {
    var storedCatData: any = await this.com.getCategory();
    storedCatData = JSON.parse(storedCatData);
    if (storedCatData) {
      var index: any = storedCatData.findIndex((x: any) => x.title === formValue.title);
      storedCatData.splice(index, 1, formValue);
      this.com.setCategory(storedCatData);
    } else {
      this.com.setCategory([formValue]);
    }
    this.updateCatForm.reset();
    this.router.navigate(['/categories']);

  }
  setFormValue() {
    console.log('this.productData', this.productData)
    this.updateCatForm = new FormGroup({
      title: new FormControl(this.productData.title, Validators.required),
      description: new FormControl(this.productData.description, Validators.required),
      image: new FormControl(this.productData.image, Validators.required)
    })
    this.imageUrl = this.productData.image;
  }

  cancel() {
    this.updateCatForm.reset();
    this.router.navigate(['/categories']);
  }
}


