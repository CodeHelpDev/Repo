import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    public router : Router,
    public menu : MenuController
  ) {
    if(localStorage.getItem('productUserLogin')!==null){
      // this.router.navigate(['/tabs/tab1']);
    } else {
      this.router.navigate(['/login']);
    }
  }
  logout(){
    localStorage.removeItem('productUserLogin');
    this.router.navigate(['/login']);
    this.menu.close();
  }
}
