import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  userArray: any;
  user: any;

  constructor(
    public router:Router
  ) {

  }

  ngOnInit() {
    var user: any = localStorage.getItem('loginUser');
    this.user = JSON.parse(user);
    console.log('user', this.user.name);

  }
  logout(){
    this.router.navigate(['tabs/tab1']);

  }

}
