import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Dialog } from '@capacitor/dialog';
import { Preferences } from '@capacitor/preferences';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  signupForm: FormGroup = new FormGroup({});
  isVisibleLogin: boolean = false;
  constructor(
    public router:Router
  ) { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      mobileno: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]),
      cpassword: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(20)])
    })
  }
  async signupUser(formValue: any) {
    var regEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var regMobile = /^[0]?[789]\d{9}$/;
    var regPassword = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;
    console.log((regEmail).test(formValue.email));
    if (regEmail.test(formValue.email)) {
      if (regMobile.test(formValue.mobileno)) {
        if (formValue.password === formValue.cpassword && formValue.password !== "") {
          var storedData: any = await this.getData();
          storedData = JSON.parse(storedData);
          if (storedData) {
            var storedUser: any = storedData.find((x: any) => {
              if (x.email === formValue.email) {
                return x;
              }
            })
            if (storedUser) {
              this.isVisibleLogin = true;
              var title = 'This user is Already Registerd';
              var message = 'User is Already Registered';
              this.setAlert(title, message);
            } else {
              storedData = storedData.concat(formValue);
              this.router.navigate(['/home']);
              this.setCurrentUser([formValue]);
              this.setData(storedData);
              this.signupForm.reset();
            }
          } else {
            this.router.navigate(['/home'])
            this.setCurrentUser([formValue])
            this.setData([formValue]);
            this.signupForm.reset();
          }
        } else {
          var title = 'Password is not Matched';
          var message = 'Password and Confirm Password is not Matched';
          this.setAlert(title, message);
        }
      } else {
        var title = 'Invalid Mobile Number';
        var message = 'Mobile is Not Valid';
        this.setAlert(title, message);
      }
    } else {
      var title = 'Invalid Email ID';
      var message = 'Email is Not Valid';
      this.setAlert(title, message);
    }

    console.log(formValue);
  }
  async setAlert(title: any, message: any) {
    await Dialog.alert({
      title: title,
      message: message
    })
  }
  async setData(value: any) {
    await Preferences.set({
      key: 'signUpUser',
      value: JSON.stringify(value)
    })
  }
  async getData() {
    var data = await Preferences.get({
      key: 'signUpUser'
    })
    return data.value;
  }
  async setCurrentUser(data: any) {
    await Preferences.set({
      key: 'currentUser',
      value: JSON.stringify(data)
    })
  }

}
