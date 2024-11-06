import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
  adminsArray: any = [];
  tempArrayForSearching:any =[]
  constructor(
    public com: CommonService
  ) { }

  ngOnInit() {
  }
  async ionViewWillEnter() {
    var adminsData: any = await this.com.getAdmins();
    adminsData = JSON.parse(adminsData);
    if (adminsData) {
      this.adminsArray = adminsData
      this.tempArrayForSearching = adminsData;
    }

  }

  searchByName(event: any) {
    var value: any = event.detail.value;
    console.log(value)
    if(value.length>3){
      this.adminsArray = this.tempArrayForSearching.filter((x:any)=>((x.email).toLowerCase()).includes(value.toLowerCase()));
    }else{
      this.adminsArray = this.tempArrayForSearching;
    }
  }
  async enabledAdmin(val: any, event: any) {
    var value: any = event.detail.checked;
    val.isEnable = value;
    console.log(value,val)
    var storedAdmins:any = await this.com.getAdmins();
    storedAdmins = JSON.parse(storedAdmins);
    if(storedAdmins){
      var index:any = storedAdmins.findIndex((x:any)=>x.email==val.email);
      storedAdmins.splice(index,1,val);
      this.com.setAdmins(storedAdmins);
    }

  }
  async deleteCoupan(index: any) {
    if (this.adminsArray) {
      var val: any = await this.com.checkConfirm('Are You Sure', 'Do You really Want to remove');
      console.log(val)
      if (val.value === true) {
        console.log(this.adminsArray)
        this.adminsArray.splice(index, 1);
        this.com.setAdmins(this.adminsArray);
      }
    }

  }

}
