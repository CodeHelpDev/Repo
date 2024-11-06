import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Dialog } from '@capacitor/dialog';
import { Preferences } from '@capacitor/preferences';
import { SigninPage } from '../signin/signin.page';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  isDisable: boolean = true;
  signUpForm!: FormGroup;
  checkEvent:any;
  constructor(
    public service: ServiceService
  ) { }

  ngOnInit() {
    this.signUpForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  }
  checkValue(event: any) {
    this.checkEvent=event;
    if (event.target.checked === true) {
      this.isDisable = false;
    } else {
      this.isDisable = true;
    }
    console.log(event.target.checked)
  }
  async signUp(formValue: any) {
    console.log(formValue);
    var validEmail = await this.validateEmail(formValue.email);
    console.log(validEmail);
    if (validEmail === true) {
      var storedUsers: any = await this.service.getValue();
      storedUsers = JSON.parse(storedUsers);
      if (storedUsers !== null) {
        console.log(storedUsers)
        if (storedUsers.find((x: any) => x.email === formValue.email && x.password === formValue.password)) {
          var title, msg;
          title = 'User is Already Registered';
          msg = 'Registered User';
          this.service.showAlert(title, msg);

        } else {
          storedUsers = storedUsers.concat(formValue);
          this.service.setValue(storedUsers);
          this.checkEvent.target.checked=false;
          this.isDisable=false;
          this.signUpForm.reset();
        }
      } else {
        this.service.setValue([formValue]);
        this.checkEvent.target.checked=false;
        this.isDisable=false;
        this.signUpForm.reset();
      }
      console.log('storedUsers', storedUsers);
    }
    else {
      var title, msg;
      title = 'Invalid email Id';
      msg = 'Please Enter a Valid Email';
      this.service.showAlert(title, msg);
    }
  }


  validateEmail(email: any) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);

  }

}
