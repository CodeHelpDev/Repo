import { Component, OnInit } from '@angular/core';
import { Preferences } from '@capacitor/preferences';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {
  orderDetails: any = [];
  constructor() { }

  async ngOnInit() {
    var storedOrders: any = await this.getOrdersData();
    storedOrders = JSON.parse(storedOrders);
    if (storedOrders) {
      this.orderDetails = storedOrders;
    }
  }

  async getOrdersData() {
    var data = await Preferences.get({
      key: 'orderDetails'
    })
    return data.value;
  }

}
