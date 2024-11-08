import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../services/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  signUpForm: FormGroup = new FormGroup({});
  isPassNotMatched:boolean=false;
  alertButtons: any = [
    {
      text: 'Cancel',
      handler: () => {
        console.log('Cancel')
      }
    },
    {
      text: 'OK',
      handler: () => {
        console.log('OK')
      }
    }
  ]
  alertButtons1=[
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
        this.signUpForm.controls['password'].setValue('');
        this.signUpForm.controls['cpassword'].setValue('');
      }
    }
  ]
  idUserDuplicate: boolean = false
  constructor(
    public com: CommonService,
    public router: Router
  ) { }

  ngOnInit() {
    this.signUpForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      mobileno: new FormControl('', [Validators.required, Validators.pattern(/^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/)]),
      dob: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      cpassword: new FormControl('', Validators.required)
    })
  }

  async onSubmit(formValue: any) {
    if (formValue.password === formValue.cpassword) {
      var storedUser: any = await this.com.getUsers();
      storedUser = JSON.parse(storedUser);
      if (storedUser) {
        var duplicate: any = storedUser.find((x: any) => {
          if (formValue.email === x.email) {
            return x
          }
        })
        if (duplicate) {
          this.idUserDuplicate = true;
        } else {
          storedUser = storedUser.concat(formValue);
          this.com.setUsers(storedUser);
          this.router.navigate(['/login']);
        }
      } else {
        this.com.setUsers([formValue]);
        this.router.navigate(['/login']);

      }
      console.log(formValue);
    }else{
      this.isPassNotMatched=true;
    }
  }
  route() {
    this.signUpForm.reset();
    this.router.navigate(['/login']);
  }
}
