import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Preferences } from '@capacitor/preferences';
import { IonInput } from '@ionic/angular';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.page.html',
  styleUrls: ['./forgetpassword.page.scss'],
})
export class ForgetpasswordPage implements OnInit {
  forgetUserForm: FormGroup = new FormGroup({});
  isOtpVisible: boolean = false;
  validOtp: any;
  isAlertOpen: boolean = false;
  isInvalidPassword: boolean = false;
  @ViewChild('myInput', { static: true }) myInput!: IonInput;
  alertButtons = [
    {
      text: 'Ok',
      handler: () => {
        this.isAlertOpen = false;
      }
    },
    {
      text: 'Resend',
      handler: () => {
        this.isAlertOpen = false;
        this.generateOtp();
        this.forgetUserForm.controls['otp'].setValue('');

      }
    }
  ]
  passwordbtn = [
    {
      text: 'OK',
      handler: () => {
        this.isInvalidPassword=false;
        this.forgetUserForm.controls['password'].setValue('');
        this.forgetUserForm.controls['cpassword'].setValue('');
      }

    }
  ]
  constructor(
    public router: Router
  ) { }

  async ngOnInit() {
    this.setReadOnly();
    var data: any = this.router.getCurrentNavigation()?.extras.state;
    console.log(data.data);
    this.forgetUserForm = new FormGroup({
      email: new FormControl(data.data.email, Validators.required),
      otp: new FormControl('', Validators.required),
      password: new FormControl(),
      cpassword: new FormControl()
    })
    this.generateOtp();
    console.log(this.validOtp);
  }
  setReadOnly() {
    this.myInput.readonly = true;
  }

  generateOtp() {
    var otp = Math.floor(1000 + Math.random() * 9000);
    this.setOtp(otp);
    this.validOtp = otp;
    return otp;
  }
  async forgetUser(formValue: any) {
    var usersData: any = await this.getUser();
    usersData = JSON.parse(usersData)
    console.log(formValue);
    if (formValue.password === formValue.cpassword) {
      if (usersData) {
        var valid: any = usersData.find((x: any) => {
          if (x.email === formValue.email) {
            return x;
          }
        })
        if (valid) {
          var index: any = usersData.findIndex((x: any) => x.email);
          console.log(index);
          var tempObj: any = {
            name: valid.name,
            email: valid.email,
            mobileno: valid.mobileno,
            password: formValue.password,
            cpassword: formValue.cpassword
          }
          usersData.splice(index, 1, tempObj);
          this.setUser(usersData);
          this.forgetUserForm.reset();
          this.router.navigate(['/login']);
        }
      } 
    }
    else {
      this.isInvalidPassword = true;
    }
  }
  async validateOtp(formValue: any) {
    console.log(formValue.otp, this.validOtp)
    if (formValue.otp == this.validOtp) {
      this.isOtpVisible = true;
      this.forgetUserForm = new FormGroup({
        email: new FormControl(formValue.email, Validators.required),
        otp: new FormControl(formValue.otp),
        password: new FormControl('', [Validators.required,Validators.minLength(8)]),
        cpassword: new FormControl('', [Validators.required,Validators.minLength(8)])
      })
    }
    else {
      this.isAlertOpen = true;
    }
    console.log(formValue)

  }
  async setOtp(data: any) {
    await Preferences.set({
      key: 'otp',
      value: data
    })
  }
  async setUser(data: any) {
    await Preferences.set({
      key: 'signUpUser',
      value: JSON.stringify(data)
    })
  }
  async getUser() {
    var data = await Preferences.get({
      key: 'signUpUser'
    })
    return data.value;
  }
}
