import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Preferences } from '@capacitor/preferences';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  constructor(
    public router:Router
  ) { }

  async ngOnInit() {
    var currentUser:any = await this.getCurrenyUser();
    currentUser = JSON.parse(currentUser);
    if(currentUser){
      this.router.navigate(['/viewaddress']);
    }else{
      this.router.navigate(['/login']);
    }
  }

  async getCurrenyUser() {
    var data: any = await Preferences.get({
      key: 'currentUser'
    })
    return data.value;
  }

}
