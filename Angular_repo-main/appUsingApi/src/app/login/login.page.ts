import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../services/service.service';
import { Router } from '@angular/router';
import { StorageService } from '../storage.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm!: FormGroup;
  constructor(
    public router: Router,
    public service: ServiceService,
    public storage: StorageService,
  ) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  }
  login(loginFormValue: any) {
    console.log(loginFormValue);
    var obj = loginFormValue;
    this.service.logInUser('auth/login', obj).subscribe((res:any )=> {
      console.log('res',res,obj)
      // this.storage.set('loginUserToken', (res));
      this.storage.set('loginUser',obj);
      this.loginForm.reset();
      this.router.navigate(['/tabs/home']);
    }, (err: any) => {
      console.log(err)
    })
  }
}
