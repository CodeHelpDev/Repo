import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-outofstock',
  templateUrl: './outofstock.page.html',
  styleUrls: ['./outofstock.page.scss'],
})
export class OutofstockPage implements OnInit {
  dataArray: any = [];
  constructor(
    public com: CommonService,
    public toastController:ToastController
  ) { }

  async ngOnInit() {
    var productsData: any = await this.com.getProductsData();
    productsData = JSON.parse(productsData);
    if (productsData) {
      var tempArray: any = productsData.find((x: any) => {
        if (x.stockDetails[0].capacity == 0) {
          return x
        }
      })
      if(tempArray){
        this.dataArray.push(tempArray);
      }
      console.log(this.dataArray);
    }
  }
  async showToast(){
    console.log('toa')
    var toast:any = await this.toastController.create({
      message:'*Product Not found*',
      duration:1500,
      position:'top'
    });
    await toast.present();
  }
}
