import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  signUpForm!: FormGroup;
  isOpen: boolean = false;
  constructor(
    public router: Router
  ) { }

  ngOnInit() {
    this.signUpForm = new FormGroup({
      name: new FormControl('', Validators.required),
      department: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  }

  singUp(formValue: any) {
    console.log(formValue);
    var arr = [];
    arr.push(formValue);
    var storedData: any = localStorage.getItem('signUpData');
    storedData = JSON.parse(storedData);


    if (storedData == null) {
      localStorage.setItem('signUpData', JSON.stringify([formValue]));
      this.signUpForm.reset();
      this.isOpen = true;
      this.router.navigate(['/login'])
    }
    else {
      if (storedData.find((x: any) => x.email === formValue.email && storedData.find((x: any) => x.password === formValue.password))) {
        console.log("User Present ");
      }
      else {
        arr = arr.concat(storedData);
        localStorage.setItem('signUpData', JSON.stringify(arr));
        this.signUpForm.reset();
        this.isOpen = true;
        this.router.navigate(['/login'])
      }
    }
  }
}