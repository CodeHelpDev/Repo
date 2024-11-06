import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {
dataArray:any = [];
tempArray:any=[];
p: number = 1;
collection: any=[];

  constructor(
    public com:CommonService,
    public toastController:ToastController,
    public router:Router
  ) { }

  ngOnInit() {
    
  }
  ionViewWillEnter(){
    this.getData();
  }
  searchCategory(event:any){
    var value:any = event.detail.value;
    console.log(value);
    if(value.length>3){
      this.dataArray = this.tempArray.filter((x:any)=>((x.title).toLowerCase()).includes(value.toLowerCase()));
    }else{
      this.dataArray = this.tempArray;
    }
  }
  async getData(){
    var storedCat:any = await this.com.getCategory()
    storedCat = JSON.parse(storedCat);
    console.log(storedCat);
    if(storedCat){
      this.dataArray = storedCat;
      this.tempArray = [...this.dataArray];
      console.log('this.dataArray',this.dataArray);
    }
  }
  async deleteProduct(index:any){
    var storedCat:any = await this.com.getCategory()
    storedCat = JSON.parse(storedCat);
    if(storedCat){
      var data = await this.com.checkConfirm('Are you Sure','Do you really want to delete?');
      if(data.value==true){
        storedCat.splice(index,1);
        this.com.setCategory(storedCat);
        this.getData();
      }
    }

  }
  updateProduct(product:any){
    this.router.navigate(['/updatecategory'],{state:{data:product}})
    console.log(product)

  }
  async toggleNotifications() {
    var toast = await this.toastController.create({
      message: 'Hello World',
      duration: 1500,
      position: 'top'
    });
    await toast.present();
  }

  viewProduct(product:any){
    console.log(product);
    this.router.navigate(['/viewcategory'],{state:{data:product}});
  }
}
