import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.page.html',
  styleUrls: ['./banner.page.scss'],
})
export class BannerPage implements OnInit {
  dataArray:any= [];
  tempArray:any = [];
  constructor(
    public com:CommonService,
    public router:Router
  ) { }

  async ngOnInit() {
    
  }
 async ionViewWillEnter(){
    var storedBannerData:any = await this.com.getBannerData();
    storedBannerData = JSON.parse(storedBannerData);
    if(storedBannerData){
      this.dataArray = storedBannerData;
      this.tempArray = [...storedBannerData]
      console.log(this.dataArray);
    }
  }

  updateBanner(product:any){
    console.log(product);
    this.router.navigate(['/updatebanner'],{state:{data:product}})
  }
  async deleteProduct(index:any){
    if(this.dataArray){
      var val:any = await this.com.checkConfirm('Are You Sure ? ','Do You Really Want for Remove')
      console.log(val.value)
      if(val.value===true){
        this.dataArray.splice(index,1);
        this.com.setBannerData(this.dataArray);
        this.ionViewWillEnter();
      }
    }
    console.log(index)
  }
  searchByName(event:any){
    var value :any = event.detail.value;
    if(value.length>3){
      this.dataArray = this.tempArray.filter((x:any)=>((x.title).toLowerCase()).includes(value.toLowerCase()))
    }else{
      this.dataArray = this.tempArray;
    }

  }
}
