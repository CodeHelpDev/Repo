import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { CommonService } from '../services/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subcategories',
  templateUrl: './subcategories.page.html',
  styleUrls: ['./subcategories.page.scss'],
})
export class SubcategoriesPage implements OnInit {
  dataArray:any=[];
  tempArray:any=[];
  constructor(
    public toastController :ToastController,
    public com:CommonService,
    public router:Router
  ) { }

  ngOnInit() {
  
  }
  ionViewWillEnter(){
    this.getData();
  }

  async getData(){
    var storedSubCat:any = await this.com.getSubCategory();
    storedSubCat = JSON.parse(storedSubCat);
    if(storedSubCat){
      this.dataArray = storedSubCat;
      this.tempArray = [...this.dataArray]
      console.log(this.dataArray)
    }
  }
  searchCategory(event:any){
    var value:any = event.detail.value;
    if(value.length>3){
      this.dataArray = this.tempArray.filter((x:any)=>((x.title).toLowerCase()).includes(value.toLowerCase()));
    }else{
      this.dataArray = this.tempArray;
    }
  }
  updateProduct(product:any){
    this.router.navigate(['/updatesubcat'],{state:{data:product}})
    console.log(product);
  }
  async toggleNotifications() {
    var toast = await this.toastController.create({
      message: 'Hello World',
      duration: 1500,
      position: 'top'
    });
    await toast.present();
  }
  deleteProduct(index:any){
    console.log(index);
  }
}
