import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-coupans',
  templateUrl: './coupans.page.html',
  styleUrls: ['./coupans.page.scss'],
})
export class CoupansPage implements OnInit {
  coupansArray: any = [];
  tempArrayForSearching:any=[];
  constructor(
    public com: CommonService,
    public router: Router
  ) { }

  ngOnInit() {

  }
  async ionViewWillEnter() {
    var storedCoupan: any = await this.com.getCoupan();
    storedCoupan = JSON.parse(storedCoupan);
    if (storedCoupan) {
      this.coupansArray = storedCoupan;
      this.tempArrayForSearching = [...storedCoupan];
    }
  }

  enableCoupan(val: any, event: any) {
    var value: any = event.detail.checked;
    val.isEnabled = value;
    if (this.coupansArray) {
      var index: any = this.coupansArray.findIndex((x: any) => x.coupanCode === val.coupanCode);

      this.coupansArray.splice(index, 1, val);
      this.com.setCoupan(this.coupansArray);
    }
  }
  searchByName(event: any) {
    var value: any = event.detail.value;
    if(value.length>3){
      this.coupansArray = this.tempArrayForSearching.filter((x:any)=>((x.coupanCode).toLowerCase()).includes(value.toLowerCase()));
    }else{
      this.coupansArray = this.tempArrayForSearching;
    }
  }

  async deleteCoupan(index: any) {
    if (this.coupansArray) {
      var check: any = await this.com.checkConfirm('Do You really want remove', 'Really Wants to Remove');
      if (check.value === true) {
        this.coupansArray.splice(index,1);
        this.com.setCoupan(this.coupansArray);
      }
    }
  }
  updateCoupan(coupan: any) {
    this.router.navigate(['/updatecoupan'], { state: { data: coupan } })
  }
}
