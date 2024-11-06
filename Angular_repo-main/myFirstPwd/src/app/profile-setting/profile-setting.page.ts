import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-profile-setting',
  templateUrl: './profile-setting.page.html',
  styleUrls: ['./profile-setting.page.scss'],
})
export class ProfileSettingPage implements OnInit {
  loginUser: any;
  URL: any;
  isModalOpen: any = false;
  editUserForm!: FormGroup;
  storedUserData: any;
  UserName: any;
  addressForm!: FormGroup;
  userAddress: any;
  constructor(
    public router: Router,
    public modal :ModalController
  ) {
    this.URL = this.router.url

  }

  ngOnInit() {
    //For User Name
    var User: any = localStorage.getItem('UserData');
    User = JSON.parse(User);
    console.log(User.mobileno);
    this.loginUser = User.mobileno;

    //for Name aand Email In Modal 
    this.storedUserData = localStorage.getItem('userprofile');
    this.storedUserData = JSON.parse(this.storedUserData);

    //For Address 

    var storedAddress: any = localStorage.getItem('userAddress');
    if (storedAddress === null) {
      this.addressForm = new FormGroup({
        address: new FormControl('', Validators.required)
      })

    } else {
      storedAddress = JSON.parse(storedAddress);
      this.userAddress = storedAddress.address;
      console.log('userAddress', this.userAddress);
      this.addressForm = new FormGroup({
        address: new FormControl(this.userAddress, Validators.required)
      })
    }

    // For User Details
    if (this.storedUserData === null) {
      this.editUserForm = new FormGroup({
        name: new FormControl('', Validators.required),
        email: new FormControl('', Validators.required)
      })
    }
    else {
      this.editUserForm = new FormGroup({
        name: new FormControl(this.storedUserData.name, Validators.required),
        email: new FormControl(this.storedUserData.email, Validators.required)
      })
      this.UserName = this.storedUserData.name;
    }
  }
  logOut() {
    localStorage.removeItem('UserData')
    this.router.navigate(['/home']);
  }
  setOpen(isOpen: boolean) {

    // console.log(isOpen);
    if (isOpen === true) {
      this.isModalOpen = true;
    }
    else {
      this.isModalOpen = false;
    }
  }
  editProfile(formValue: any) {

    var validFormValue: any = {
      mobileno: this.loginUser,
      name: formValue.name,
      email: formValue.email
    }
    localStorage.setItem('userprofile', JSON.stringify(validFormValue));
    console.log(validFormValue);
    // this.editUserForm.reset();
    this.isModalOpen = false;
    this.ngOnInit();
  }
  address(addressValue: any) {
    console.log('addressValue', addressValue.address);
    var userAddressObj: any = {
      mobileno: this.loginUser,
      address: addressValue.address
    }
    localStorage.setItem('userAddress', JSON.stringify(userAddressObj))
    this.modal.dismiss();
    this.ngOnInit();

  }
}
