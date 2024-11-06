import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../services/service.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  signUpForm!:FormGroup;
  constructor(
    public service : ServiceService
  ) { }

  ngOnInit() {
    this.signUpForm= new FormGroup({
      fname: new FormControl('',Validators.required),
      lname : new FormControl('',Validators.required),
      email: new FormControl('',Validators.required),
      username :  new FormControl('',Validators.required),
      password : new FormControl('',Validators.required),
      address : new FormControl('',Validators.required)
    })
  }
  signUp(formValue:any){
    var obj = formValue;
    console.log('obj',obj)
    this.service.signUpNewUser('users',JSON.stringify(obj)).subscribe(res=>{
      console.log(res)
      this.signUpForm.reset();
    },err=>{
      console.log(err)
    })
  }

}
