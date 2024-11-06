import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { combineLatest } from 'rxjs';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-addnewsubcategory',
  templateUrl: './addnewsubcategory.page.html',
  styleUrls: ['./addnewsubcategory.page.scss'],
})
export class AddnewsubcategoryPage implements OnInit {
  addNewSubCatForm: FormGroup = new FormGroup({});
  categoryData: any
  constructor(
    public router: Router,
    public com: CommonService
  ) { }

  ngOnInit() {
    this.addNewSubCatForm = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required)
    })
    this.getCatData();
  }
  async getCatData() {
    var data: any = await this.com.getCategory();
    data = JSON.parse(data);
    if (data) {
      this.categoryData = data;
      console.log(this.categoryData)
    }
  }

  onCancel() {
    this.addNewSubCatForm.reset();
    this.router.navigate(['/subcategories']);
  }
  async onSubmit(formValue: any) {
    var storeSubCat: any = await this.com.getSubCategory();
    storeSubCat = JSON.parse(storeSubCat);
    if (storeSubCat) {
      storeSubCat = storeSubCat.concat(formValue);
      this.com.setSubCategory(storeSubCat);
    } else {
      this.com.setSubCategory([formValue]);
    }
    this.addNewSubCatForm.reset();
    this.router.navigate(['/subcategories']);

  }
}
