import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {
  usersArray: any;
  tempArrayForSearching:any =[]
  constructor(
    public service: ServiceService,
    public com: CommonService
  ) { }

  ngOnInit() {
    //Function Called For Storing users Data in Local Storage
    // this.setDataInLocalStorage()
    this.getData();

  }
  async setDataInLocalStorage() {
    this.service.getUsersDataFromApi().subscribe((res: any) => {
      console.log(res)
      this.com.setUserData(res)
    })
  }
  async getData() {
    var storedUser: any = await this.com.getUserData();
    storedUser = JSON.parse(storedUser);
    if (storedUser) {
      console.log(storedUser);
      this.usersArray = storedUser;
      this.tempArrayForSearching = [...storedUser];
    }
  }
  searchByName(event: any) {
    var value: any = event.detail.value;
    console.log(value);
    if(value.length>3){
      this.usersArray = this.tempArrayForSearching.filter((x:any)=>((x.name).toLowerCase()).includes(value.toLowerCase())
       || ((x.email).toLowerCase()).includes(value.toLowerCase()));
    }else{
      this.usersArray = this.tempArrayForSearching;
    }

  }
  enableUsers(val: any, event: any) {
    var value: any = event.detail.value;
    val.isEnabled = value;
    if (value) {
      var index: any = this.usersArray.findIndex((x: any) => x.email === val.email);
      this.usersArray.splice(index, 1, val);
      this.com.setUserData(this.usersArray);
    }
  }
  updateUser(user: any) {
    console.log(user)
  }
  async deleteCoupan(index: any) {
    if (this.usersArray && index) {
      var val: any = await this.com.checkConfirm('Are you Sure', 'Do you really wants to remove');
      if (val.value === true) {
        this.usersArray.splice(index, 1);
        this.com.setUserData(this.usersArray);
      }
    }
    console.log(index)
  }
}
