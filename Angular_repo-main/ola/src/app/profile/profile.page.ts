import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { Preferences } from '@capacitor/preferences';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  data:any;
  rideDetails:any
  constructor(
    public com: AppComponent
  ) { }

  ngOnInit() {
    this.getUserData();
    this.getRideDetails();

  }
  async getUserData() {
    this.data = await this.com.getUserDetail();
    this.data = JSON.parse(this.data)
    console.log(this.data);
  }
  async getRideDetails() {
    this.rideDetails = await this.getRide();
    this.rideDetails = JSON.parse(this.rideDetails);
    console.log(this.rideDetails,this.rideDetails.length)
  }
  async getRide() {
    var data = await Preferences.get({
      key: 'rideDetails'
    })
    return data.value;
  }
}
