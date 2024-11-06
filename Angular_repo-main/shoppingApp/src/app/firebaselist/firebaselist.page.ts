import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';
import { Preferences } from '@capacitor/preferences';

@Component({
  selector: 'app-firebaselist',
  templateUrl: './firebaselist.page.html',
  styleUrls: ['./firebaselist.page.scss'],
})
export class FirebaselistPage implements OnInit {
  isVisible: boolean = false;
  userDataArray: any = [];
  tempArry: any = [];
  constructor(
    public service: ServiceService
  ) { }

  ngOnInit() {
    this.service.getUsersData().subscribe((res: any) => {
      console.log(res?.users);
      this.userDataArray = res?.users;
      this.tempArry = [...this.userDataArray];

    })
  }
  async onIonChange(ev: any) {
    var lower: any = ev.detail.value.lower;
    var upper: any = ev.detail.value.upper
    if (this.tempArry && lower || upper) {
      var arrr: any = this.tempArry.filter((x: any) => {
        if ((x.weight) > lower && (x.weight) < upper) {
          return x;
        }
      });
      if (arrr) {
        this.userDataArray = arrr;
      } else {
        this.userDataArray = this.tempArry;
      }
    }


  }
  switchKnobs() {
    if (this.isVisible === false) {
      this.isVisible = true;
    } else {
      this.isVisible = false;
    }
  }
  async setData(data: any) {
    await Preferences.set({
      key: 'fireBaseList',
      value: JSON.stringify(data)
    })
  }

  async getData() {
    var data: any = await Preferences.get({
      key: 'fireBaseList'
    })
    return data.value;
  }

}
