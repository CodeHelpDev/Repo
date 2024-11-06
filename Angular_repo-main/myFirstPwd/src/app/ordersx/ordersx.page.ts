import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ordersx',
  templateUrl: './ordersx.page.html',
  styleUrls: ['./ordersx.page.scss'],
})
export class OrdersxPage implements OnInit {
  URL: any;
  loginUser: any;
  cartItems:any;
  constructor(
    public router: Router
  ) {
    var user: any = localStorage.getItem('UserData');
    user = JSON.parse(user);
    this.loginUser = user.mobileno;
  }

  ngOnInit() {
    this.URL = this.router.url;
    this.cartItems = localStorage.getItem('cart');
    this.cartItems = JSON.parse(this.cartItems);
    console.log(this.cartItems);
  }
  logOut() {
    localStorage.removeItem('UserData');
    this.router.navigate(['/home']);
  }
  browseVehicles() {
    this.router.navigate(['/home']);
  }

}
