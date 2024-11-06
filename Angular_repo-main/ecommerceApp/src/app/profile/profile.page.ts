import { Component, OnInit } from '@angular/core';
import { Preferences } from '@capacitor/preferences';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
userData:any;
  constructor() { }

  async ngOnInit() {
    var currentUser:any = await this.getCurrentUserData();
    currentUser = JSON.parse(currentUser);
    console.log(currentUser);
    this.userData = currentUser;
  }

  async getCurrentUserData(){
    var data = await Preferences.get({
      key:'currentUser'
    })
    return data.value;
  }

}
