import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm!: FormGroup;
  isAlert: boolean = false;
  isValidAlert:boolean=false;
  constructor(
    public router: Router
  ) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  }

  login(loginFormValue: any) {
    var storedData: any = localStorage.getItem('productSingup');
    storedData = JSON.parse(storedData);
    var matchedUser = storedData.find(function (user: any) {
      return user.email === loginFormValue.email && user.password === loginFormValue.password;
    });

    if (matchedUser) {
      localStorage.setItem('productUserLogin',JSON.stringify(loginFormValue))
      this.isAlert = true;
      this.router.navigate(['tabs/tab1']);
    }
    else {
      this.isValidAlert=true;
      console.log('Invalid ');
    }
  }

  signUpRoute(){
    this.router.navigate(['signup']);
  }
}
