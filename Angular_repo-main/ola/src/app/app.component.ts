import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Preferences } from '@capacitor/preferences';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    public router:Router
  ) {
    this.checkLoginUser();
  }


async checkLoginUser(){
  var user = await this.getUserDetail();
  console.log(user);
  if(user){
    this.router.navigate(['/tabs/home']);
  }else{
    this.router.navigate(['/login']);
  }
}


async getUserDetail(){
  var data = await Preferences.get({
    key:'userDetails'
  })
  return data.value;
  
}



}

