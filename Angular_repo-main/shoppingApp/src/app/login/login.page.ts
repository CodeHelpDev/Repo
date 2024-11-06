import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Preferences } from '@capacitor/preferences';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup = new FormGroup({});
  isInvalidUser: Boolean = false;
  regButton=[
    {
      text:'Register Now',
      handler:()=>{
        this.loginForm.reset();
        this.router.navigate(['/signup']);
        this.isInvalidUser=false;
      }
    },
    {
      text:'Re Enter Password',
      handler:()=>{
        this.loginForm.controls['password'].setValue('');
        this.isInvalidUser=false;
      }
    }
  ]
  constructor(
    public router:Router
  ) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)])
    })
  }
  async onSubmit(formValue: any) {
    console.log(formValue);
    var storedUser: any = await this.getUsersData();
    storedUser = JSON.parse(storedUser);
    if (storedUser) {
      var validUser: any = storedUser.find((x: any) => {
        if (x.email === formValue.email && x.password === formValue.password) {
          return x;
        }
      })
      if (validUser) {
        this.setCurrentUser(validUser);
        this.router.navigate(['/tabs/main']);
        this.loginForm.reset();        
      } else {
        this.isInvalidUser=true;
      }
    }
  }

  async setCurrentUser(data: any) {
    await Preferences.set({
      key: 'currentUser',
      value: JSON.stringify(data)
    })
  }
  async getUsersData() {
    var data: any = await Preferences.get({
      key: 'signUpUser'
    })
    return data.value
  }

}
