import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { Preferences } from '@capacitor/preferences';
import { Router } from '@angular/router';
import { state } from '@angular/animations';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.page.html',
  styleUrls: ['./destination.page.scss'],
})
export class DestinationPage implements OnInit {
  currentLocation: any
  isConfirm:boolean=false;
  destination:any='';
  
  constructor(
    public com:AppComponent,
    public router:Router
  ) { }

  ngOnInit() {
    this.currentLocation = history.state.desti;
    console.log(this.currentLocation);
  }
  addDestination() {
    var dest: any = document.getElementById('searchValue');
    dest = dest.value;
    console.log(dest);
    if(dest && this.currentLocation){
      this.isConfirm=true
      this.destination=dest;
      console.log(this.destination);
    }else{
      this.isConfirm=false;
      this.destination='';
    }

  }
 async confirm(){
     if(this.destination && this.currentLocation){
      var user:any= await this.com.getUserDetail();
      user= JSON.parse(user);
      var obj:any={
        number:user.number,
        otp:user.otp,
        destination:this.destination,
        currentLocation:this.currentLocation
      }
      var rideDetails:any = await this.getRideDetails();
      rideDetails= JSON.parse(rideDetails);
      console.log(rideDetails)
      if(rideDetails){
        console.log(rideDetails);
        rideDetails= rideDetails.concat(obj);
        this.setRideDetails(rideDetails);
        this.router.navigate(['/pin'],{state:{data:obj}});
        this.destination='';
        this.currentLocation='';       
      }else{
        this.setRideDetails([obj]);
      }
      console.log(user.number);      
     }
  }
  async setRideDetails(data:any){
    await Preferences.set({
      key:'rideDetails',
      value:JSON.stringify(data)
    })
  }
  async getRideDetails(){
   var data =  await Preferences.get({
      key:'rideDetails'
    })
    return data.value;
  }
  
  

}
