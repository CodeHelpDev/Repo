import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  email:any

  constructor() { }
  ngOnInit() {
    var loginUser: any = localStorage.getItem('loginUser');
   loginUser = JSON.parse(loginUser);
    this.email= loginUser.email;
    
    
  }

}
