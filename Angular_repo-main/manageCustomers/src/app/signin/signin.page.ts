import { Component, OnInit } from '@angular/core';
import { SignupPage } from '../signup/signup.page';
import { Dialog } from '@capacitor/dialog';
import { Router } from '@angular/router';
import { Preferences } from '@capacitor/preferences';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {

  constructor(
    public service: ServiceService,
    public router: Router
  ) { }

  ngOnInit() {
  }
  async loginUser() {
    var email: any, password: any;
    email = document.getElementById('email');
    password = document.getElementById('password');
    

    var formValue = {
      email: email.value,
      password: password.value
    }
    console.log(formValue, 'formValue');
    console.log(email.value, password.value);
    var registeredUser: any = await this.service.getValue();
    registeredUser = JSON.parse(registeredUser);
    if (registeredUser == null) {
      var msg, title;
      title = 'Unregistered User';
      msg = 'User Not Registered';
      this.showAlert(title, msg);
    } else {
      var validUser = registeredUser.find((x: any) => {
        if (x.email === email.value && x.password === password.value) {
          return x
        }
      })
      if (validUser) {
        this.setLoginValue(formValue)
        this.router.navigate(['/home']);
        email.value='';
        password.value='';
      }
    else {
      var title, msg;
      title = 'Invalid User ';
      msg = 'Invalid User Id or Password'
      this.showAlert(title, msg);
    }
  }
    console.log(registeredUser);
}
  async showAlert(title: any, msg: any){
  await Dialog.alert({
    title: title,
    message: msg
  })
}

  async setLoginValue(data: any){
  await Preferences.set({
    key: 'loginUser',
    value: JSON.stringify(data)
  })
}
}
