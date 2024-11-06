import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Preferences } from '@capacitor/preferences';
import { MenuController } from '@ionic/angular';
import { ServiceService } from './services/service.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  activeTab: any = 'home';
  constructor(
    public router: Router,
    public menu: MenuController,
    public service: ServiceService

  ) { }


  async ngOnInit() {
    var storedUser: any = await this.getCurrentUser();
    storedUser = JSON.parse(storedUser);
    if (storedUser) {
      this.router.navigate(['/kids']);
    } else {
      this.router.navigate(['/login']);
    }
  }
  rout(value: any) {
    this.activeTab = value;
    this.router.navigate(['/' + value]);
    this.menu.close();
  }

  async getCurrentUser() {
    var data = await Preferences.get({
      key: 'currentUser'
    })
    return data.value;
  }
  ionViewWillEnter(){
    this.activeTab = 'home';
  }
}
