import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Preferences } from '@capacitor/preferences';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-updatesubcat',
  templateUrl: './updatesubcat.page.html',
  styleUrls: ['./updatesubcat.page.scss'],
})
export class UpdatesubcatPage implements OnInit {
  productData:any;
  categoryData:any;
  updateSubCatForm:FormGroup = new FormGroup({})
  constructor(
    public router:Router,
    public com:CommonService
  ) { }

  ngOnInit() {
    this.updateSubCatForm = new FormGroup({
      title: new FormControl('',Validators.required),
      description : new FormControl('',Validators.required),
      category: new FormControl('',Validators.required)
    })
    var data :any = this.router.getCurrentNavigation()?.extras.state;
    this.productData = data.data;
    if(this.productData){
      this.setFormValues();
    }
  }
  ionViewWillEnter(){
    this.getCatData();
  }
  async getCatData(){
    var data:any = await this.com.getCategory();
    data = JSON.parse(data);
    if(data){
      this.categoryData = data;
      console.log('this.categoryData',this.categoryData);
    }
  }
  async onSubmit(formValue:any){
    var storedSubCat:any = await this.com.getSubCategory();
    storedSubCat = JSON.parse(storedSubCat);
    if(storedSubCat){
      var index:any = storedSubCat.findIndex((x:any)=>x.title===formValue.title);
      storedSubCat.splice(index,1,formValue);
      this.com.setSubCategory(storedSubCat);
      this.updateSubCatForm.reset();
      this.router.navigate(['/subcategories']);
    }
    console.log(formValue);

  }
  onCancel(){

  }
  setFormValues(){
    console.log(this.productData)
    this.updateSubCatForm = new FormGroup({
      title: new FormControl(this.productData.title,Validators.required),
      description: new FormControl(this.productData.description,Validators.required),
      category: new FormControl(this.productData.category,Validators.required)
    })
  }
}
