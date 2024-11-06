import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Dialog } from '@capacitor/dialog';
import { Preferences } from '@capacitor/preferences';

@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.page.html',
  styleUrls: ['./createaccount.page.scss'],
})
export class CreateaccountPage implements OnInit {
  signUpForm!: FormGroup;
  isEmailValid: any;
  constructor(
    public router:Router,
  ) { }

  ngOnInit() {
    this.signUpForm = new FormGroup({
      fname: new FormControl('', Validators.required),
      lname: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      cpassword: new FormControl('', Validators.required)
    })
  }

  async onSubmit(formValue: any) {
    console.log(formValue.email);
    if (this.isEmailValid == true) {
      if (formValue.password === formValue.cpassword) {
        var storedData: any = await this.getDetails();
        storedData = JSON.parse(storedData)
        if (storedData === null) {
          this.setDetails([formValue]);
          this.signUpForm.reset();
          this.router.navigate(['/welcome']);
        } else {
          var storedEmail = storedData.find((x: any) => {
            if(x.email===formValue.email){
              return x;
            }
          })
          console.log(storedEmail);
          if(storedEmail){
            this.showRegEmailAlert();
          }else{
            storedData= storedData.concat(formValue);
            this.setDetails(storedData);
            this.router.navigate(['/welcome']);
            this.signUpForm.reset();
          }
        }
      } else {
        this.showPasswordAlert();
      }
    } else {
      this.showEmailAlert();
    }
  }
  validateEmail(event: any) {
    var emailValue = event.target.value;
    console.log(emailValue);
    var validEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    var isValid = validEmail.test(emailValue);
    this.isEmailValid = isValid;
  }
  async showEmailAlert() {
    await Dialog.alert({
      title: 'Invalid Email',
      message: 'Please Enter Valid Email'
    })
  }
  async showPasswordAlert() {
    Dialog.alert({
      title: 'Password Does Not Matched',
      message: 'Password Does Not Matched'
    })
  }
  async setDetails(data: any) {
    await Preferences.set({
      key: 'signUpUser',
      value: JSON.stringify(data)
    })
  }
  async getDetails() {
    var data = await Preferences.get({
      key: 'signUpUser'
    })
    return data.value;
  }
  async showRegEmailAlert() {
    await Dialog.alert({
      title: 'Email already Registered',
      message: 'Please use Different Email'
    })
  }

}

