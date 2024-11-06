import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Dialog } from '@capacitor/dialog';
import { Preferences } from '@capacitor/preferences';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup = new FormGroup({});
  isForgetVisible: boolean = false;
  isAlertOpen: boolean = false;
  isForgetPassword: Boolean = false;
  forgetUser:any;
  actionbtn =
    [
      {
        text: 'Signup Now',
        handler: () => {
          this.router.navigate(['/signup']);
          this.isAlertOpen = false;
        },
      },
      {
        text: 'Cancel',
        handler: () => {
          this.isAlertOpen = false;
        }
      }
    ];
  forgetBtn = [
    {
      text: 'Forget Password',
      handler: () => {
        this.loginForm.reset();
        this.router.navigate(['/forgetpassword'],{state:{data:this.forgetUser}})
        this.isForgetPassword = true;
      }
    },
    {
      text: 'Cancel',
      handler: () => {
        this.isForgetPassword = false;
      }
    }
  ]
  constructor(
    public router: Router,
    public alertCon: AlertController
  ) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(20)])
    })
  }
  setResult() {
    this.isAlertOpen = false;
  }
  async loginUser(formValue: any) {
    var storedUser: any = await this.getSignUpUsers();
    storedUser = JSON.parse(storedUser);
    if (storedUser) {
      var validUser: any = storedUser.find((x: any) => {
        if (formValue.email === x.email && formValue.password === x.password) {
          return x;
        }
        if (formValue.email === x.email && formValue.password !== x.password) {
          this.isForgetPassword = true;
          this.forgetUser =formValue;
        }

      })
      if (validUser) {
        if (validUser.email === formValue.email && validUser.password === formValue.password) {
          this.router.navigate(['/home']);
          this.setCurrentUser([validUser]);
        }
      } 
      else if (validUser===undefined && this.isForgetPassword == false) {
        console.log(formValue);
        this.isAlertOpen = true;
      }

    }
  }

  async setCurrentUser(data: any) {
    await Preferences.set({
      key: 'currentUser',
      value: JSON.stringify(data)
    })
  }
  async getSignUpUsers() {
    var data = await Preferences.get({
      key: 'signUpUser'
    })
    return data.value;
  }
  async showAlert(title: any, message: any) {
    await Dialog.alert({
      title: title,
      message: message
    })
  }
  ionViewWillLeave() {
    console.log('ionViewWillLeave');
  }
}
