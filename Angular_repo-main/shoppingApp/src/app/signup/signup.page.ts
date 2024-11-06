import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Preferences } from '@capacitor/preferences';
declare var jQuery: any
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  signUpForm: FormGroup = new FormGroup({});
  isAlertOpen: boolean = false;
  isUserRegistered: boolean = false;
  constructor(
    public router: Router
  ) { }
  public alertButtons = [
    {
      text: 'Try with different Email',
      handler: () => {
        this.isAlertOpen = false;
        this.signUpForm.controls['email'].setValue('');
      }
    },
    {
      text: 'Cancel',
      handler: () => {
        this.isAlertOpen = false;
      }
    }
  ]
  userRegButton = [{
    text:'Login Now',
    handler:()=>{
      this.router.navigate(['/login']);
      this.signUpForm.reset();
    },
    },
    {
      text:'Try Different Email',
      handler:()=>{
        this.signUpForm.reset();
    
      }
    }
]

  ngOnInit() {
    this.signUpForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)])
    })
  }
  async onFormSubmit(formValue: any) {
    var regEmail: any = /\S+@\S+\.\S+/;
    var storedUser: any = await this.getUserData();
    storedUser = JSON.parse(storedUser);
    if (storedUser) {
      var stored: any = storedUser.find((x: any) => {
        if (x.email === formValue.email) {
          return x
        }
      })
      if (stored) {
        this.isUserRegistered = true;
      } else {
        if (regEmail.test(formValue.email)) {
          storedUser = storedUser.concat(formValue);
          this.setUserData(storedUser);
          this.router.navigate(['/login']);
          this.signUpForm.reset()
          console.log(formValue);
        } else {
          this.isAlertOpen = true;
        }
      }
    } else {
      if (regEmail.test(formValue.email)) {
        this.setUserData([formValue]);
        console.log(formValue);
        this.router.navigate(['/login']);
        this.signUpForm.reset();
      } else {
        this.isAlertOpen = true;
      }
    }
  }
  async setUserData(data: any) {
    await Preferences.set({
      key: 'signUpUser',
      value: JSON.stringify(data)
    })
  }
  async getUserData() {
    var data: any = await Preferences.get({
      key: 'signUpUser'
    })
    return data.value;
  }
}
