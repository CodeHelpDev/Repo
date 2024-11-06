import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Tab2PageModule } from '../tab2/tab2.module';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  loginform!: FormGroup;
  user: any;
  constructor(
    public router: Router
  ) { }
  ngOnInit() {
    this.loginform = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })

  }
  submit(loginFormValue: any) {
    console.log(loginFormValue.email);
    var storedData = localStorage.getItem('formData');
    console.log(storedData);
    if (loginFormValue.email && loginFormValue.password) {
      if (storedData == null || storedData == "") {
        alert('Go and Sign Up First ');
      }
      if (storedData !== null && storedData !== "") {
        var arr = JSON.parse(storedData);
        
        // if (arr.find((x: any) => x.email === loginFormValue.email && arr.find((x: any) => x.password === loginFormValue.password))) {
        //   localStorage.setItem('loginUser', JSON.stringify(loginFormValue));
        //   this.router.navigate(['tabs/tab3'])
        //   this.loginform.reset();
        // }
        // else {
        //   alert("Invalid User Name Or Password");
        // }

        var matchedUser = arr.find(function (user: any) {
          return user.email === loginFormValue.email && user.password === loginFormValue.password;
        })
        if (matchedUser) {
          localStorage.setItem('loginUser', JSON.stringify(loginFormValue));
          this.loginform.reset();
          this.router.navigate(['tabs/tab3'])

        } else {
          alert("Invalid username or password. Please try again.");
        }
      }
    }
  }
}
