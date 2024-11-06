import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    public router :Router
  ) {
    var user = localStorage.getItem('UserData');
    if (user===null){
      // this.router.navigate(['/home'])
    }else{
      // this.router.navigate(['/profile']);
    }
  }
}
