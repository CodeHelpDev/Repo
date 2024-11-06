import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Preferences } from '@capacitor/preferences';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  currentUrl: any='';
  isActive: boolean = false;

  constructor(
    public menu: MenuController,
    public router: Router,
    public location: Location
  ) { }

  async ngOnInit() {
    console.log("ngOnInit");
    this.currentUrl = this.location.path();
    console.log(this.currentUrl);

    var currentUser = await this.checkUser();
    if(currentUser){
      this.router.navigate(['/home']);
    }else{
      this.router.navigate(['/signin']);
    }

  }
  routingFun(event: any) {
    this.router.navigate([event]);
    console.log(event)
    this.currentUrl=event;
    this.menuClose();
  }

  menuClose() {
    this.menu.close();
  }
  async checkUser(){
    var data = await Preferences.get({
      key:'loginUser'
    })
    return data.value;
  }
}
