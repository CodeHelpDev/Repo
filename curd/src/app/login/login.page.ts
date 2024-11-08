import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../services/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm:FormGroup= new FormGroup({});
  isInvalidDetails:boolean=false;
  alertButtons=[
    {
      text:'Cancel',
      handler:()=>{
        console.log('Cancel')
      }
    },
    {
      text:'OK',
      handler:()=>{
        console.log('OK');
        this.loginForm.reset();
      }
    }
  ]
  constructor(
    public router:Router, 
    public com:CommonService
  ) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email : new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',Validators.required)
    })
  }
  async onSubmit(formValue:any){
    var storedUser:any = await this.com.getUsers();
    storedUser = JSON.parse(storedUser);
    if(storedUser){
      var valid:any = storedUser.find((x:any)=>{
        if(formValue.email===x.email && formValue.password===x.password){
          return x;
        }
      })
      if(valid){
        this.com.setCurrentUser([valid]);
        this.router.navigate(['/tabs/home'])
      }else{
        this.isInvalidDetails=true
      } 
    }else{
      this.isInvalidDetails=true
    }
    console.log(formValue);
  }
  route(){
    this.loginForm.reset();
    this.router.navigate(['/signup']);
  }
}
