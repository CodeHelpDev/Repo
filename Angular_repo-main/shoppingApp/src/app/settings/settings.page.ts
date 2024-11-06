import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Preferences } from '@capacitor/preferences';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  changePasswordForm: FormGroup = new FormGroup({});
  isModalOpen: boolean = false;
  isPasswordReadOnly: boolean = false;
  isreadonly: boolean = true;
  currentUserData: any;
  isPasswordNotMatched: boolean = false;
  isOldPasswordNotMatched: boolean = false;
  constructor(
    public router:Router
  ) { }
  passwordNotMatched = [
    {
      text: 'Cancel',
      role: 'cancel',
      handler: () => {
      console.log('cancel');
      }
    },
    {
      text: 'Ok',
      role: 'confirm',
      handler: () => {
        this.changePasswordForm.controls['cpassword'].setValue('');
        this.changePasswordForm.controls['password'].setValue('');
      }
    }
  ]
  oldpassword=[
    {
      text:'Cancel',
      role:'cancel',
      handler:()=>{
        this.isOldPasswordNotMatched=false
      }
    },
    {
      text:'ForGet Password',
      role:'confirm',
      handler:()=>{
        this.isModalOpen=false;
        this.isOldPasswordNotMatched=false;
        setTimeout(() => {
          this.router.navigate(['/forgetpassword']);
        }, 1000);
      }
    }
  ]

  async ngOnInit() {
    this.changePasswordForm = new FormGroup({
      email: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      dob: new FormControl('', Validators.required),
      oldpassword: new FormControl('', [Validators.required, Validators.minLength(8)]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      cpassword: new FormControl('', [Validators.required, Validators.minLength(8)]),
    })
    this.isPasswordReadOnly = true;
    var currentUser: any = await this.getCurrentUser();
    currentUser = JSON.parse(currentUser);
    if (currentUser) {
      this.currentUserData = currentUser;
    }
    this.isreadonly = true;

  }

  modalToggle(formValue: any) {
    this.changePasswordForm = new FormGroup({
      email: new FormControl(this.currentUserData.email, Validators.required),
      name: new FormControl(formValue.name, Validators.required),
      dob: new FormControl(formValue.dob, Validators.required),
      oldpassword: new FormControl('', [Validators.required, Validators.minLength(8)]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      cpassword: new FormControl('', [Validators.required, Validators.minLength(8)]),
    })
    if (this.isModalOpen == false) {
      this.isModalOpen = true;
    } else {
      this.isModalOpen = false;
    }
  }
  clickModal(event: any) {
    console.log(event.detail.breakpoint)
    var breakpointValue: any = event.detail.breakpoint;
    if (breakpointValue <= 0.5) {
      this.isModalOpen = false;
    }
  }
  async changePassword(formValue: any) {
    if (formValue.password === formValue.cpassword) {
      if (formValue.oldpassword === this.currentUserData.password) {
        var storedUsers: any = await this.getAllUserData();
        storedUsers = JSON.parse(storedUsers);
        if (storedUsers) {
          var currentUser: any = storedUsers.find((x: any) => {
            if (x.email === this.currentUserData.email) {
              return x;
            }
          })
          var index: any = storedUsers.findIndex((x: any) => x.email === currentUser.email);
          storedUsers.splice(index, 1, formValue);
          this.setAllUserData(storedUsers);
          this.setCurrentUser(formValue)
        }
      } else {
        this.isOldPasswordNotMatched = true;
      }
    } else {
      this.isPasswordNotMatched = true;
    }
  }

  async setCurrentUser(data: any) {
    await Preferences.set({
      key: 'currentUser',
      value: JSON.stringify(data)
    })
  }
  async getCurrentUser() {
    var data = await Preferences.get({
      key: 'currentUser'
    })
    return data.value;
  }
  async getAllUserData() {
    var data = await Preferences.get({
      key: 'signUpUser'
    })
    return data.value;
  }
  async setAllUserData(data: any) {
    await Preferences.set({
      key: 'signUpUser',
      value: JSON.stringify(data)
    })
  }
}
