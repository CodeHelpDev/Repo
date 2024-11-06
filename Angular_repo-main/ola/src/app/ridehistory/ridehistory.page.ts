import { Component, OnInit } from '@angular/core';
import { Preferences } from '@capacitor/preferences';

@Component({
  selector: 'app-ridehistory',
  templateUrl: './ridehistory.page.html',
  styleUrls: ['./ridehistory.page.scss'],
})
export class RidehistoryPage implements OnInit {
ridesDetails:any;
  constructor() { }

  ngOnInit() {
    this.getRideDetails();
  }

  async getRideDetails(){
    var rides:any = await this.getRides();
    rides= JSON.parse(rides);
    console.log(rides);
    if(rides){
      this.ridesDetails=rides;
    }else{
      console.log('No Rides Yet');
    }
  }

  async getRides(){
    var data = await Preferences.get({
      key:'rideDetails'
    })
    return data.value;
  }
}
