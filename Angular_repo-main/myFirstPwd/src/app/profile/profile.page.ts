import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
loginUser:any;
  constructor(
    public router :Router
  ) { }

  ngOnInit() {
    var user :any= localStorage.getItem('UserData');
    user = JSON.parse(user);
    console.log(user.mobileno);
    this.loginUser = user.mobileno;
  }
  logOut(){
    localStorage.removeItem('UserData');
    this.router.navigate(['/home']);
  }

}
