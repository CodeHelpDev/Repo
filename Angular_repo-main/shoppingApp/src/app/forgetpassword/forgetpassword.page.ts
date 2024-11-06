import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Preferences } from '@capacitor/preferences';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.page.html',
  styleUrls: ['./forgetpassword.page.scss'],
})
export class ForgetpasswordPage implements OnInit {
  forgetForm: FormGroup = new FormGroup({});
  validOtp: any;
  invalidEmail: boolean = false;
  isformVisible: boolean = false;
  isReadOnly: boolean = false;
  isSetPassword: boolean = false;
  isInvalidOtp: boolean = false;
  validUser: any;
  isRoutePop: boolean = false;
  button = [
    {
      text: 'Cancel',
      role: 'cancel',
      handler: () => {
        this.invalidEmail = false;
        console.log('Alert canceled');
      },
    },
    {
      text: 'OK',
      role: 'confirm',
      handler: () => {
        this.invalidEmail = false;
        console.log('Alert confirmed');
      },
    },
  ]
  otpButton = [
    {
      text: 'Cancel',
      role: 'cancel',
      handler: () => {
        this.isInvalidOtp = false;
      }
    },
    {
      text: 'OK',
      role: 'confirm',
      handler: () => {
        this.isInvalidOtp = false;
      }
    }
  ]
  routeButton = [
    {
      text: 'Cancel',
      role: 'cancel',
      handler: () => {
        this.isRoutePop = false;
      }
    },
    {
      text: 'Ok',
      role: 'confirm',
      handler: () => {
        this.isRoutePop = false;
        this.router.navigate(['/login']);
      }
    }
  ]
  constructor(
    public router: Router
  ) { }
  ngOnInit() {
    this.forgetForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      otp: new FormControl(''),
      password: new FormControl('')
    })
  }

  async generateOtp(formValue: any) {
    var usersData: any = await this.getUserData();
    usersData = JSON.parse(usersData);
    if (usersData) {
      var validEmail: any = usersData.find((x: any) => {
        if (x.email === formValue.email) {
          return x;
        }
      })

      if (validEmail) {
        this.validUser = validEmail;
        var otp = Math.floor(1000 + Math.random() * 9000);
        this.validOtp = otp;
        console.log('this.validOtp', this.validOtp);
        this.isformVisible = true;
        this.isReadOnly = true;
        this.setFormValidation(formValue.email);
      } else {
        this.invalidEmail = true;
      }
    } else {
      this.invalidEmail = true;
    }

  }
  validateOtp(formValue: any) {
    console.log(formValue);
    if (formValue.otp == this.validOtp) {
      this.isSetPassword = true;
      this.isInvalidOtp = false;
      this.validatePasswordForm(formValue);
    } else {
      this.isSetPassword = false;
      this.isInvalidOtp = true;
    }
  }
  setFormValidation(email: any) {
    this.forgetForm = new FormGroup({
      email: new FormControl(email, [Validators.required, Validators.email]),
      otp: new FormControl('', Validators.required),
      password: new FormControl('')
    })
  }
  validatePasswordForm(formValue: any) {
    this.forgetForm = new FormGroup({
      name: new FormControl(this.validUser.name, Validators.required),
      email: new FormControl(this.validUser.email, [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)])
    })
  }
  async onSubmit(formValue: any) {
    var storedUser: any = await this.getUserData();
    storedUser = JSON.parse(storedUser);
    if (storedUser) {
      var index: any = storedUser.findIndex((x: any) => x.email === formValue.email);
      storedUser.splice(index, 1, formValue);
      this.setUserData(storedUser);
      this.forgetForm.reset();
      this.isRoutePop = true;
      setTimeout(() => {
        this.isRoutePop = false;
        console.log(this.isRoutePop);
        if(this.isRoutePop===false){
          setTimeout(() => {
            this.router.navigate(['/login']);
          }, 800);
        }
      }, 500);
    }
    console.log(formValue);


  }
  async getUserData() {
    var data: any = await Preferences.get({
      key: 'signUpUser'
    })
    return data.value;
  }
  async setUserData(data: any) {
    await Preferences.set({
      key: 'signUpUser',
      value: JSON.stringify(data)
    })
    return data.value
  }
}
