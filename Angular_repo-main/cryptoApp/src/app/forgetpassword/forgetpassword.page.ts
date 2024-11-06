import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Dialog } from '@capacitor/dialog';
import { Preferences } from '@capacitor/preferences';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.page.html',
  styleUrls: ['./forgetpassword.page.scss'],
})
export class ForgetpasswordPage implements OnInit {
  forgetForm:FormGroup=new FormGroup({});
  isValidEmail:any;
  constructor(
    public router:Router,
    public navCtrl:NavController
  ) { }

  ngOnInit() {
    this.forgetForm= new FormGroup({
      email: new FormControl('',Validators.required)
    })
  }
 async onSubmit(formValue:any){
    if(this.isValidEmail===true){
      console.log(formValue);
      var storedUser:any =await this.getUsers();
      storedUser = JSON.parse(storedUser);
      if(storedUser){
       var validEmail = storedUser.find((x:any)=>{
          if(formValue.email===x.email){
            return x;
          }
        })
        console.log(validEmail);
        if(validEmail){
          var otp = this.generateOtp();
          console.log(otp)
          this.setValidOtp(otp);
          this.router.navigate(['correctemail'],{state: {data: validEmail}})
          // this.navCtrl.navigateForward('/',{queryParams:validEmail})
        }else{
          this.unRegUsersAlert();
        }
      }
    }else{
      this.showInvalidEmailAlert();
    }
  }
  generateOtp(){
    var otp = Math.floor((Math.random()*900000)+100000)
    console.log(otp);
    return otp;
  }
  validateEmail(event:any){
    var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    var email = event.target.value;
    console.log(email);
    this.isValidEmail= pattern.test(email);
    console.log(this.isValidEmail);
  }
  async showInvalidEmailAlert(){
    await Dialog.alert({
      title:'Invalid Email Id',
      message:'Please Enter Valid Email Id '
    })
  }
  async getUsers(){
    var data = await Preferences.get({
      key:'signUpUser'
    })
    return data.value;
  }
  async unRegUsersAlert(){
    await Dialog.alert({
      title:'This user is Not Register',
      message:'Unregistered User'
    })
  }
  async setValidOtp(data:any){
    await Preferences.set({
      key:'validOtp',
      value:JSON.stringify(data)
    })
  }

}
