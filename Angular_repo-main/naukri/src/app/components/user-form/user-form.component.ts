import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Preferences } from '@capacitor/preferences';
import { ModalController } from '@ionic/angular';
import { HomePage } from 'src/app/home/home.page';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit {
  userForm!: FormGroup;
  loginUserEmail: any;
  validUser: any;
  user: any;

  constructor(
    public formBuilder: FormBuilder,
    public modals: ModalController,
    public router:Router
    
  ) {

    // this.userForm = this.formBuilder.group({
    //   email: ['', Validators.required],
    //   name: ['', Validators.required],
    //   mobileno: ['', Validators.required],
    //   workStatus: ['', Validators.required],
    // });


  }

  ngOnInit() {
    this.fillUserDetails();
    this.userForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      mobileno: new FormControl('', Validators.required),
      workStatus: new FormControl('', Validators.required)
    })
  }
  async formSubmit(formValue: any) {
    var storedUsers: any = await this.getRegisteredUserData();
    storedUsers = JSON.parse(storedUsers);
    console.log(storedUsers);
    var updatedUser = storedUsers.find((user: any) => {
      console.log(user.email);
      console.log(formValue.email);
      if (user.email === formValue.email) {
        return formValue;

      }
    })
    console.log(updatedUser);
    if (updatedUser) {
      storedUsers.splice(updatedUser,1)
      storedUsers = storedUsers.concat(formValue);
      this.setUserData(storedUsers);
      this.updateCurrentUser(formValue);
      this.modals.dismiss();
      // location.reload();
    }



  }
  async fillUserDetails() {
    var value: any = await this.getData();
    value = JSON.parse(value);
    this.userForm.patchValue(value);

  }
  async updateCurrentUser(data: any) {
    await Preferences.set({
      key: 'currentUser',
      value: JSON.stringify(data)
    })
  }
  async getData() {
    var currentUserData = await Preferences.get({
      key: 'currentUser'
    })
    return currentUserData.value;
  }
  async getRegisteredUserData() {
    var registeredUser: any = await Preferences.get({
      key: 'userData'
    })
    return registeredUser.value;
  }
  async setUserData(data: any) {
    await Preferences.set({
      key: 'userData',
      value: JSON.stringify(data)
    })
  }
}
