import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  signUpFormWithNumber!: FormGroup;
  constructor(
    public router: Router
  ) { }

  ngOnInit() {
    this.signUpFormWithNumber = new FormGroup({
      userKey: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  }
  signUp(formValve: any) {
    var arr: any = [];
    arr.push(formValve);
    var storedData: any = localStorage.getItem('InstaSignUpData');

    if (storedData) {
      arr = arr.concat(JSON.parse(storedData));
      var storedUser = JSON.parse(storedData).find((user: any) => {
        return user.userKey === formValve.userKey && user.password === formValve.password
      });
      if (storedUser) {
        console.log("already exits")
        this.signUpFormWithNumber.reset();
      }
      else {
        localStorage.setItem('InstaSignUpData', JSON.stringify(arr));
        this.signUpFormWithNumber.reset();
        this.signUpFormWithNumber.reset();
      }

    }
    else{
      localStorage.setItem('InstaSignUpData', JSON.stringify(arr));
      this.signUpFormWithNumber.reset();
    }
  }
}