import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Preferences } from '@capacitor/preferences';

@Component({
  selector: 'app-ourevent',
  templateUrl: './ourevent.page.html',
  styleUrls: ['./ourevent.page.scss'],
})
export class OureventPage implements OnInit {
  result: any = [];
  segmentValue: any = 'all';
  allSegData: any = [];
  currentUser:any;
  constructor(
    public service: ServiceService,
    public menu: MenuController,
    public router: Router
  ) {

  }

  ngOnInit() {
    this.service.getDataFromApi().subscribe((res: any) => {
      this.result = res;
      this.setData(this.result);
    })
    this.verifyUser();
  }
  async verifyUser() {
    var data: any = await this.service.getUser();
    data = JSON.parse(data);
    console.log(data[0].role)
    this.currentUser= data[0].role;
  }

  async serachUser(event: any) {
    var searchedValue: any = event.target.value;
    var storedApiData: any = await this.getData();
    storedApiData = JSON.parse(storedApiData);
    if (storedApiData && searchedValue) {
      this.result = storedApiData.filter((x: any) => ((x.name).toLowerCase()).includes((searchedValue.toLowerCase())));
    } else {
      this.result = storedApiData;
    }
  }
  segValue(event: any) {
    this.segmentValue = event.target.value;
  }

  gamesChat(botName: any) {
    this.router.navigate(['/staff', { key: botName }])
  }
  async setData(data: any) {
    await Preferences.set({
      key: 'apiData',
      value: JSON.stringify(data)
    })
  }
  async getData() {
    var data = await Preferences.get({
      key: 'apiData'
    })
    return data.value;
  }

}

