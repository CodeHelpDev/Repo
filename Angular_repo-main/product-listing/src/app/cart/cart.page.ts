import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  cartItems: any;
  val: any;
  isAdded: boolean = true;
  constructor() { 
  
  }

  ngOnInit() {
    
  }

  ionViewWillEnter() {
    this.cartItems = localStorage.getItem('cartItem');
    this.cartItems = JSON.parse(this.cartItems);
    console.log(this.cartItems);
  }

  removeCart(val: any) {
    console.log(val.position);
    var storedCartItems: any = localStorage.getItem('cartItem');
    storedCartItems = JSON.parse(storedCartItems);
    console.log(storedCartItems);
    if(storedCartItems.find((x:any)=>x.position===val.position))
      {
        storedCartItems.splice(val,1);
        if(storedCartItems.length===0)
          {
            localStorage.removeItem('cartItem');
          }
          else
          {
            localStorage.setItem('cartItem',JSON.stringify(storedCartItems));
          }
          this.ionViewWillEnter();
      }


  }


}
