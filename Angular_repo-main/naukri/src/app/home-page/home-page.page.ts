import { Component, OnInit } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.page.html',
  styleUrls: ['./home-page.page.scss'],
})
export class HomePagePage implements OnInit {
  segmentValue:any ='software-product';
  secondSegmentValue:any='career';
  user:any;
  constructor() { 
   
  }

  ngOnInit() {
  }

  segValue(value:any)
  {
    this.segmentValue=value.target.value;
    console.log(this.segmentValue);
  }
  secondSegValue(event:any){
    this.secondSegmentValue = event.target.value;
    console.log(this.secondSegmentValue);
  }
 
}
