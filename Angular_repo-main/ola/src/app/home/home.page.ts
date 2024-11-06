import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Dialog } from '@capacitor/dialog';
import { Geolocation } from '@capacitor/geolocation';
import { Preferences } from '@capacitor/preferences';

declare var google: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  map: any;
  lat: any;
  lng: any;
  constructor(
    public router:Router
  ) { }

  ngOnInit() {
    this.getLocation();
  }

  async getLocation() {
    const coordinates = await Geolocation.getCurrentPosition();
    if (coordinates) {
      this.showposition(coordinates);

    }
  }
  showposition(position: any) {
    console.log('latitude', position.coords.latitude);
    console.log('longitude', position.coords.longitude);
    var defaultLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    console.log('defaultLocation',defaultLocation);
    var mapOptions = {
      zoom: 15,
      mapTypeControl: false,
      center: defaultLocation,
    };
 
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);
  }
  searchLocation(){
    var destination:any = document.getElementById('current-location');
    destination=destination.value;
    console.log(destination);
    if(destination && destination!==""){
      this.router.navigate(['/destination'],{state:{desti:destination}});
    }else{
      this.showAlert();

    }
  }
  
  async showAlert(){
    await Dialog.alert({
      title:'Please Enter Your Current Location',
      message:'Current Location Not Be Blank'
    })
  }



}




