import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  isAlert = false;
  // alertButtons = ['OK'];



  signUpForm!: FormGroup;
  constructor(
    public router: Router
  ) {

  }

  ngOnInit() {
    this.signUpForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      mobileno: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  }
  signUp(formValue: any) {
    // console.log(formValue);
    var arr: any = [];
    arr.push(formValue);
    var storedData: any = localStorage.getItem('productSingup');

    if (storedData == null) {
      localStorage.setItem('productSingup', JSON.stringify(arr));
    }
    else {
      storedData = JSON.parse(storedData);
      if (storedData.find((x: any) => x.email === formValue.email) && storedData.find((x: any) => x.password === formValue.password)) {
        this.isAlert = true;
      }
      else {
        arr = arr.concat(storedData);
        localStorage.setItem('productSingup', JSON.stringify(arr));
        this.signUpForm.reset();
      }
    }
  }
  loginRoute() {
    this.router.navigate(['/login']);
  }

}
