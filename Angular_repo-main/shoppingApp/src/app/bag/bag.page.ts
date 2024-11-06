import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Preferences } from '@capacitor/preferences';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-bag',
  templateUrl: './bag.page.html',
  styleUrls: ['./bag.page.scss'],
})
export class BagPage implements OnInit {
  cartData: any = [];
  quantity: any = [];
  isOpen: boolean = false;
  value: any;
  totalAmount:number=0;
  finalArray:any =[];
  constructor(
    public pop: PopoverController,
    public router:Router
  ) { }

  async ngOnInit() {
    this.totalAmount=0;
    var storedCart: any = await this.getCartData();
    storedCart = JSON.parse(storedCart);
    console.log(storedCart);
    this.cartData = storedCart;
    for (let i = 0; i < this.cartData?.length; i++) {
      this.quantity[i] = 1;
      console.log(this.cartData)
      var price= Number(this.cartData[i].stock)*Number(this.quantity[i]);
      this.cartData[i].price = price;
      this.totalAmount += price;
      console.log(this.totalAmount);
    }

  }

  checkOut(){
    this.cartData.forEach((element:any,index:any) => {
      element.quantity = this.quantity[index];
      this.finalArray[index]= element;
      console.log(this.finalArray);
    });
    this.router.navigate(['/checkout'],{state:{data:this.finalArray}})
  }


  quanti(operator: any, index: any,element:any) {
    if (this.quantity[index] >= 2) {
      if (operator == '-' && this.quantity[index]>=1) {
        this.totalAmount-=element.price;
        this.quantity[index]--;
      }
      if (this.quantity[index] == 0) {
        this.quantity[index] = 1
      }
    }
    if(operator=='+' && this.quantity[index]>=1) {
      this.totalAmount+=element.price;
      this.quantity[index]++;
    }
  }
  openPop(val: any) {
    this.isOpen = true;
    this.value = val
  }
  async likes() {
    console.log('this.value',this.value);
    var storedLikes:any = await this.getLikes();
    storedLikes = JSON.parse(storedLikes);
    if(storedLikes){
     var liked:any = storedLikes.find((x:any)=>{
        if(x.id===this.value.id){
          return x
        }
      })
      console.log('liked',liked);
      if(liked){
        console.log('Item Already Liked');
      }else{
        storedLikes = storedLikes.concat(this.value);
        this.setLikes(storedLikes);
      }
    }else{
      this.setLikes([this.value]);
    }
    console.log(this.value);
    this.isOpen = false;
  }
  async deleteItem() {
    var storedCartItems = await this.getCartData();
    storedCartItems = JSON.parse(storedCartItems);
    if(storedCartItems){
      var storedItem:any = storedCartItems.find((x:any)=>{
        if(x.id===this.value.id){
          return x
        }
      })
      if(storedItem){
        var index = storedCartItems.findIndex((x:any)=>x.id===this.value.id);
        storedCartItems.splice(index,1)
        if(storedCartItems.length===0){
          this.removeCartKey();
        }else{
          this.setCartItems(storedCartItems);
        }
        this.isOpen=false;
        setTimeout(() => {
          this.ngOnInit();
        }, 200);
        console.log('Already stored Items')
      }
    }
    console.log(this.value);
    this.isOpen = false;

  }


  async removeCartKey(){
    await Preferences.remove({
      key:'cartData'
    })
  }
  async setLikes(data: any) {
    await Preferences.set({
      key: 'likes',
      value: JSON.stringify(data)
    })
  }
  async getLikes(){
    var data:any = await Preferences.get({
      key:'likes'
    })
    return data.value
  }
  async setCartItems(data:any){
    await Preferences.set({
      key:'cartData',
      value:JSON.stringify(data)
    })
  }
  async getCartItems(){
    var data:any = await Preferences.get({
      key:'cartData'
    })
    return data.value
  }
  async getCartData() {
    var data: any = await Preferences.get({
      key: 'cartData'
    })
    return data.value
  }
}
