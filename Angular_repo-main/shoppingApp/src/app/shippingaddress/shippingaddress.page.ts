import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Preferences } from '@capacitor/preferences';

@Component({
  selector: 'app-shippingaddress',
  templateUrl: './shippingaddress.page.html',
  styleUrls: ['./shippingaddress.page.scss'],
})
export class ShippingaddressPage implements OnInit {
  allAddress: any;
  checkBoxValue: any = [true, false, false, false]
  currentUserData: any;
  order: any;
  constructor(
    public router: Router
  ) { }

  ngOnInit() {
    var data: any = this.router.getCurrentNavigation()?.extras.state
    console.log(data.data);
    this.currentUserData = data.data; 
    this.allAddress = data.data.address;
    console.log(this.allAddress);
    this.order= data.data.orderDetails;
    console.log(this.order);
    this.order.address = data.data.address;
    console.log(this.order);
   
    
  }
  editAddress(element: any, index: any) {
    console.log(element, index)
  }
  async selctAddress(val: any, i: any) {
    this.checkBoxValue = [];
    this.checkBoxValue[i] = true;
    var tempArray: any = [];
    tempArray = [...this.allAddress];
    var temp: any = this.allAddress[0];
    tempArray.splice(0, 1, val);
    tempArray.splice(i, 1, temp);
    var storedUser: any = await this.getAllUsers();
    storedUser = JSON.parse(storedUser);
    if (storedUser) {
      var index: any = storedUser.findIndex((x: any) => x.email === x.email);
      this.currentUserData.address = tempArray
      // this.order = this.currentUserData;
      delete this.currentUserData['orderDetails'];
      storedUser.splice(index,1,this.currentUserData)
      this.order.address = tempArray;
      // this.setAllUsers(storedUser)
      // this.setCurrentUser(this.currentUserData)
    }
  }

  async routeWithData() {
    console.log(this.order.address)
    var tempAdd:any = this.order.address[0];
    delete this.order['password'];
    this.order.address = tempAdd;
    var temArray:any=[];
    temArray=[
      {
        items:[this.order[0],this.order[1]],
        userDetails:[this.currentUserData.name,this.currentUserData.email],        
        paymentDetails: this.currentUserData.paymentDetails
      }
    ];
    

    console.log(temArray);

    var orders: any = await this.getOrders();
    orders = JSON.parse(orders);
    if (orders) {
      console.log(this.order)
      orders.push(Object.assign({},...temArray));
      this.setOrders(orders)
    } else {
      console.log(this.order)
      this.setOrders(temArray);
    }
    var orders: any = await this.getOrders();
    orders = JSON.parse(orders);
    console.log(orders);
    this.router.navigate(['/ordersuccess'])
  }
  async getAllUsers() {
    var data: any = await Preferences.get({
      key: 'signUpUser'
    })
    return data.value
  }
  async setAllUsers(data: any) {
    await Preferences.set({
      key: 'signUpUser',
      value: JSON.stringify(data)
    })
  }
  async getCurrentUser() {
    var data: any = await Preferences.get({
      key: 'currentUser'
    })
    return data.value;
  }
  async setCurrentUser(data: any) {
    await Preferences.set({
      key: 'currentUser',
      value: JSON.stringify(data)
    })
  }
  async setOrders(data: any) {
    await Preferences.set({
      key: 'order',
      value: JSON.stringify(data)
    })
  }
  async getOrders() {
    var data: any = await Preferences.get({
      key: 'order'
    })
    return data.value;
  }

}
