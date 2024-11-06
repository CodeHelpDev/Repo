import { PrefixNot } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, MinValidator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Preferences } from '@capacitor/preferences';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm!: FormGroup;
  constructor(
    public router :Router
  ) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('',Validators.required),
      password : new FormControl('',Validators.required)
    })
    this.getData();
  }

  async login(formValue: any) {
    console.log(formValue.email);
    var registeredUser = await this.getData();
    registeredUser = JSON.parse(registeredUser);
    console.log('registeredUser',registeredUser);
    var validUser = registeredUser.find((user:any)=>{
      if (user.email===formValue.email && formValue.password===user.password) {
        console.log(user);
        return user;      
      }
    })
    console.log('validUser',validUser);
    if(validUser){
      Preferences.set({
        key:'currentUser',
        value:JSON.stringify(validUser)
      })
      this.router.navigate(['/home-page']);
      this.loginForm.reset();
    }else{
      console.log('Invalid User Data ');
    }


  }
async setData(validUser:any){
  await Preferences.set({
    key:'loginUser',
    value:JSON.stringify(validUser)
  })


  }
async getData(){
  var storedUserData:any = await Preferences.get({
    key:'userData'
  })
  console.log(storedUserData.value);
  return storedUserData.value;
}

}
