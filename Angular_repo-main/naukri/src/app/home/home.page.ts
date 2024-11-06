import { Component } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { Preferences } from '@capacitor/preferences';

register();

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  segmentValue: any = 'all';
  sponsoredSegementValue: any = 'all';


  constructor() {
   
  }

  segment(val: any) {
    this.segmentValue = val.target.value;
    console.log('sefment ' + this.segmentValue);
  }
  sponsoredSegValue(val: any) {
    this.sponsoredSegementValue = val.target.value;
    console.log('sponsoredSegementValue', this.sponsoredSegementValue);
  }
  
  
}
