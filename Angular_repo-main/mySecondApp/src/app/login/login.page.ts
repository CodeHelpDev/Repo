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
  isOpen:boolean=false;

  constructor(
    public router: Router
  ) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  }
  loginfun(loginFormValue: any) {
    console.log(loginFormValue.email);
    console.log(loginFormValue.password);
    var storedData: any = localStorage.getItem('signUpData');
    storedData = JSON.parse(storedData);
    console.log(storedData);
    var matchedData = storedData.find((user: any) => {
      return user.email === loginFormValue.email && user.password === loginFormValue.password;
    })
    if (matchedData) {
      console.log("Login Successfully");
      localStorage.setItem('loginUser', JSON.stringify(loginFormValue));
      this.isOpen=true
      this.router.navigate(['/tabs/home']);
      
    }
    else {
      console.error('InValid User Name and Password');
    }
  }

}
