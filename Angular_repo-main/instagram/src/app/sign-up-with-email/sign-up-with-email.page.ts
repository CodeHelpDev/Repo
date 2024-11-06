import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up-with-email',
  templateUrl: './sign-up-with-email.page.html',
  styleUrls: ['./sign-up-with-email.page.scss'],
})
export class SignUpWithEmailPage implements OnInit {
  emailSignUpForm!: FormGroup;
  constructor(
    public router: Router
  ) { }

  ngOnInit() {
    this.emailSignUpForm = new FormGroup({
      userKey: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  }
  signUpEmail(formValve: any) {
    var storedData: any = localStorage.getItem('InstaSignUpData');
    var arr: any = [];
    arr.push(formValve);
    if (storedData) {
      arr = arr.concat(JSON.parse(storedData));
      var storedUser = JSON.parse(storedData).find((user: any) => {
        return user.userKey === formValve.userKey && user.password === formValve.password;
      });
      if (storedUser) {
        console.log("already exits")
        this.emailSignUpForm.reset();
      }
      else {
        localStorage.setItem('InstaSignUpData', JSON.stringify(arr));
        this.emailSignUpForm.reset();
      }
    } 
    else{
      localStorage.setItem('InstaSignUpData', JSON.stringify(arr));
      this.emailSignUpForm.reset();
    }
  }
}
