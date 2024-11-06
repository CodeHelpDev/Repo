import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Preferences } from '@capacitor/preferences';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  cartDataArray: any = [];
  quantity: any = [0];
  constructor(
    public router: Router
  ) { }

  async ngOnInit() {
    var storedCartData: any = await this.getCartData();
    storedCartData = JSON.parse(storedCartData);
    this.cartDataArray = storedCartData;
    this.cartDataArray?.forEach((element: any, index: any) => {
      this.quantity[index] = 0;
    });

  }

  adjustQuantity(value: any, index: any) {
    if (value === '+') {
      this.quantity[index] += 1;
    }
    if (value === '-') {
      this.quantity[index] -= 1;
    }
    if (this.quantity[index] < 0) {
      this.quantity[index] = 0;
    }
  }
  routeWithData() {
    var finalArray: any = [];
    this.cartDataArray.find((element: any, index: any) => {
      element.quantity = this.quantity[index];
      finalArray[index] = element;
    });
    console.log(finalArray);
    this.router.navigate(['/checkout'],{state:{data:finalArray}});
  }
  async getCartData() {
    var data = await Preferences.get({
      key: 'cartData'
    })
    return data.value;
  }


}
