import { Component, OnInit } from '@angular/core';
import { Preferences } from '@capacitor/preferences';

@Component({
  selector: 'app-myorders',
  templateUrl: './myorders.page.html',
  styleUrls: ['./myorders.page.scss'],
})
export class MyordersPage implements OnInit {
  orderDetails:any=[];
  constructor() { }

  async ngOnInit(){
    var storedData: any = await this.getOrders();
    storedData = JSON.parse(storedData);
    console.log(storedData);
    storedData.forEach((element:any,index:any) => {
      console.log(element.items);
      this.orderDetails = element.items
      
    });
    console.log(this.orderDetails);
  }


  async getOrders() {
    var data: any = await Preferences.get({
      key: 'order'
    })
    return data.value
  }

}