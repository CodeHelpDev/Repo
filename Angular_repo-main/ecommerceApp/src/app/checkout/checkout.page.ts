import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Preferences } from '@capacitor/preferences';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {
  cartDataArray:any=[];
  finalAmount:number=0;
  constructor(
    public router:Router
  ) { }

  ngOnInit() {
    var data:any = this.router.getCurrentNavigation()?.extras.state;
    console.log('data',data.data);
    this.cartDataArray=data.data;
    console.log(this.cartDataArray);
    this.cartDataArray.forEach((element:any,index:any)=> {
      console.log(element, element.price);
      this.finalAmount+=((element?.quantity) * (element?.price))
    });
    console.log(this.finalAmount);
  }
 async buyNow(){
    var tempArry:any=[];
    var discount:any = this.finalAmount/5;
    var shipping:any =this.finalAmount/8;
    console.log(this.finalAmount+shipping-discount);
    this.cartDataArray.forEach((element:any,index:any) => {
      element.amount = ((element.price)*(element.quantity))
      if(element.amount>0){
        tempArry[index] = element;
      }
    });
    console.log(tempArry);
    var storedDetails:any = await this.getOrderDetails();
    storedDetails = JSON.parse(storedDetails);
    if(storedDetails){
      storedDetails = storedDetails.concat(tempArry);
      this.setOrderDetails(storedDetails);
    }else{
      this.setOrderDetails(tempArry);
    }
    this.router.navigate(['/confirm']);

  }
  async setOrderDetails(data:any){
    await Preferences.set({
      key:'orderDetails',
      value:JSON.stringify(data)
    })
  }
  async getOrderDetails() {
    var data = await Preferences.get({
      key:'orderDetails'
    })
    return data.value;
    
  }

}
