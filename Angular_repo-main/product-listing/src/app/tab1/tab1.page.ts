import { Component } from '@angular/core';
import { ServiceService } from '../services/service.service';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  data: any = [];
  isReady: boolean = false;
  allData:any=[];

  constructor(
    public service: ServiceService,
    public router: Router,
    public menu: MenuController
  ) {

  }


  ionViewWillEnter() {
    this.getData();
    
  }

  getData(search_data: any = null) {
    this.isReady = false;
    this.service.getdata(search_data).subscribe((res: any) => {
      this.isReady = true;
      this.data = res?.search_results;
      this.allData=res?.search_results
      console.log('trytry', this.data)

    }, err => {
      this.isReady = true;
      console.log(err)
    })
  }
  searcnFilter(e: any) {
    if(e.detail.value!==''){
      this.data=this.allData.filter((x:any)=>x.title.toLowerCase().includes(e.detail.value))
      console.log(this.allData.filter((x:any)=>x.title.toLowerCase().includes(e.detail.value)))
    }  else {
      console.log('else');
      this.data=this.allData
    }
  }

}
