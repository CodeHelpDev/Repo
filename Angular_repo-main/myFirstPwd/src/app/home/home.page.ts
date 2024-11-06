import { Component } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],

})

export class HomePage {
  constructor(
    public alertController: AlertController,
    public router :Router,
    public modal : ModalController
  ) { }
  hide: boolean = false;
  value: any = 'custom';
  loginForm!: FormGroup
  mobileNumber: any;
  otpForm!: FormGroup
  randNum: any;

  ngOnInit() {
    this.loginForm = new FormGroup({
      mobileno: new FormControl('', Validators.required)
    })
    this.otpForm = new FormGroup({
      otp: new FormControl('', Validators.required)
    })
  }
  ionViewWillEnter() {
    this.hide = false;
  }
  show(e: any) {
    console.log('hiuu', e.target.value);
    this.value = e.target.value;
  }

  login(formValue: any) {
    console.log('formValue', formValue.mobileno);
    // console.log('Before.emailValue', this.mobileNumber.mobileno);
    var IndNum = /^[0]?[789]\d{9}$/;
    if (IndNum.test(formValue.mobileno)) {
      this.mobileNumber = formValue;
      console.log('Valid Mobile Number ', this.mobileNumber.mobileno);
      this.randNum = (1000 + Math.random() * 9000).toFixed(0);
      localStorage.setItem('validOtp', this.randNum);
    }
    else {
      console.log('Wrong Number');
    }
  }
  otpFun(signupValue: any) {
    console.log('signupValue', signupValue.otp);
    var storedOtp = localStorage.getItem('validOtp');
    console.log('sstoredOtp', storedOtp);
    if (storedOtp === signupValue.otp) {
      console.log('Otp Matched ', storedOtp);
      localStorage.setItem('UserData',JSON.stringify(this.mobileNumber));
      this.modal.dismiss();
      this.router.navigate(['/profile']);
    }
    else {
      console.log('Not Matched', signupValue);
    }
  }
}
