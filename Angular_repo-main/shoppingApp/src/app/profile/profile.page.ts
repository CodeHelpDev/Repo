import { Component, OnInit } from '@angular/core';
import { Preferences } from '@capacitor/preferences';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  currentUserData: any;
  constructor() { }

  async ngOnInit() {
    var currentUser: any = await this.getCurrentUser();
    currentUser = JSON.parse(currentUser);
    if (currentUser) {
      this.currentUserData = currentUser;
    }
  }

  async getCurrentUser() {
    var data = await Preferences.get({
      key: 'currentUser'
    })
    return data.value
  }

}
