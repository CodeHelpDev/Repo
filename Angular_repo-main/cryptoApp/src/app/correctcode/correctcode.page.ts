import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Dialog } from '@capacitor/dialog';
import { Preferences } from '@capacitor/preferences';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-correctcode',
  templateUrl: './correctcode.page.html',
  styleUrls: ['./correctcode.page.scss'],
})
export class CorrectcodePage implements OnInit {
  isActionSheetOpen: boolean = false;
  changePasswordForm: FormGroup = new FormGroup({});
  userData: any;
  constructor(
    public router:Router,
    public modal:ModalController
  ) { }

  ngOnInit() {
    var data = window.history.state.data;
    console.log(data);
    this.userData = data;

    this.changePasswordForm = new FormGroup({
      password: new FormControl('', Validators.required),
      cpassword: new FormControl('', Validators.required)
    })

  }
  async getUserDetails() {
    var data = await Preferences.get({
      key: 'signUpUser'
    })
    return data.value;
  }
  async setUserDetails(data: any) {
    await Preferences.set({
      key: 'signUpUser',
      value: JSON.stringify(data)
    })
  }
  async onSubmit(formValue: any) {
    console.log(formValue)
    if (formValue.password === formValue.cpassword) {
      var storedUser: any = await this.getUserDetails();
      storedUser = JSON.parse(storedUser);
      console.log(storedUser);
      if (storedUser) {
        var index = storedUser.findIndex((x: any) => x.email === this.userData.email)
        console.log(index);
        this.userData.password = formValue.password
        this.userData.cpassword = formValue.cpassword
        console.log(this.userData);
        storedUser.splice(index,1,this.userData);
        this.isActionSheetOpen =true;
        this.setUserDetails(storedUser); 
      }
    } else {
      this.showAlertInvalidPassword();

    }
  }
  async showAlertInvalidPassword() {
    await Dialog.alert({
      title: 'Password Not Matched',
      message: 'Both Password Not Mactched'
    })
  }
  onClickHandler(){
    this.changePasswordForm.reset();
    this.modal.dismiss();
    this.router.navigate(['/welcome']);
  }


}
