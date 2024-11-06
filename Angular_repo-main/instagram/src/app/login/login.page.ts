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
  constructor(
    public router: Router
  ) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      userKey: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  }
  login(formValue: any) {
    
    var storedData: any = localStorage.getItem('InstaSignUpData');
    storedData = JSON.parse(storedData);
    var validUser = storedData.find((user: any) => {
      return user.userKey === formValue.userKey && user.password === formValue.password;
    });
    if (validUser) {
      localStorage.setItem('InstaLoginUser',JSON.stringify(formValue));
      this.loginForm.reset();
      this.router.navigate(['/tabs/home']);
    }
    else {
      console.log('Invalid User Details');
    }
  }
}
