import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deals',
  templateUrl: './deals.page.html',
  styleUrls: ['./deals.page.scss'],
})
export class DealsPage implements OnInit {
  dealsArray: any = [];
  searchingArray:any;
  constructor(
    public com: CommonService,
    public router: Router
  ) { }

  ngOnInit() {
  }
  async ionViewWillEnter() {
    console.log('this.ionViewWillEnter');
    var storedDeals: any = await this.com.getDeals();
    storedDeals = JSON.parse(storedDeals);
    if (storedDeals) {
      this.dealsArray = storedDeals;
      this.searchingArray = [...storedDeals];
    }
  }
  searchByName(event: any) {
    var value = event.target.value;
    if(value.length>3){
      console.log(value);
      this.dealsArray = this.searchingArray.filter((x:any)=>((x.title).toLowerCase()).includes((value).toLowerCase()));
    }else{
      this.dealsArray = this.searchingArray;
    }
  }
  viewDeals(val: any) {
    this.router.navigate(['/view-deals'], { state: { data: val } })
  }
  async deleteProduct(index: any) {
    if(this.dealsArray){
      var val:any = await this.com.checkConfirm('Are You Sure','Do You Really Want to Remove');
      console.log(val)
      if(val.value===true){
        this.dealsArray.splice(index,1);
        this.com.setDeals(this.dealsArray);
      }
    }
  }
  updateBanner(product: any) {
    this.router.navigate(['/updatedeals'], { state: { data: product } });
  }

}
