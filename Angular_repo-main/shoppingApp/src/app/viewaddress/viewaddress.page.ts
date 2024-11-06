import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Preferences } from '@capacitor/preferences';

@Component({
  selector: 'app-viewaddress',
  templateUrl: './viewaddress.page.html',
  styleUrls: ['./viewaddress.page.scss'],
})
export class ViewaddressPage implements OnInit {
  changeAddressForm:FormGroup= new FormGroup({})
  address: any = [];
  currentUser: any = [];
  isModalOpen: boolean = false;
  index:any;
  constructor() { }

  async ngOnInit() {
    this.changeAddressForm = new FormGroup({
      address : new FormControl('',Validators.required)
    })
    var currentUser: any = await this.getUserDetails();
    currentUser = JSON.parse(currentUser);
    if (currentUser) {
      this.currentUser = currentUser;
      console.log(currentUser.address);
      this.address = currentUser.address;
      
    }
  }
  editAddress(element: any, index: any) {
    this.isModalOpen = true;
    this.index=index;
    this.changeAddressForm = new FormGroup({
      address: new FormControl(element.address,Validators.required)
    })


  }
  modalClose(){
    console.log('modal Close');
    this.isModalOpen=false;
  }
  async submitForm(formValue:any){
    this.address.splice(this.index,1,formValue);
    console.log(this.address);
    this.currentUser.address = this.address;
    console.log(this.currentUser)
    var storedUser:any = await this.getAllUsers();
    storedUser = JSON.parse(storedUser);
    if(storedUser){
      var index:any = storedUser.findIndex((x:any)=>x.email===x.email)
      storedUser.splice(index,1,this.currentUser);
      this.setAllUsers(storedUser);
      this.setUserDetails(this.currentUser);
      console.log(storedUser);
      this.ngOnInit();
      this.changeAddressForm.reset();
      this.isModalOpen=false;
    }
    console.log(formValue);
  }



  async setUserDetails(data: any) {
    await Preferences.set({
      key: 'currentUser',
      value: JSON.stringify(data)
    })
  }
  async getUserDetails() {
    var data: any = await Preferences.get({
      key: 'currentUser',
    })
    return data.value;
  }
  async getAllUsers(){
    var data = await Preferences.get({
      key:'signUpUser',
    })
    return data.value
  }
  async setAllUsers(data:any){
    await Preferences.set({
      key:'signUpUser',
      value:JSON.stringify(data)
    })
  }

}
