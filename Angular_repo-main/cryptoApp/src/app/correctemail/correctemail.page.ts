import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Dialog } from '@capacitor/dialog';
import { Preferences } from '@capacitor/preferences';

@Component({
  selector: 'app-correctemail',
  templateUrl: './correctemail.page.html',
  styleUrls: ['./correctemail.page.scss'],
})
export class CorrectemailPage implements OnInit {
otpForm:FormGroup=new FormGroup({})
currentUserData:any
  constructor(
    public route:ActivatedRoute,
    public router:Router
  ) { }

  ngOnInit() {
    var data = window.history.state.data;
    console.log(data);
    this.currentUserData=data;
    this.otpForm = new FormGroup({
      otp:new FormControl('',Validators.required)
    })
  }
  async onSubmit(formValue:any){
    console.log(formValue.otp);
    var otp = await this.getOtp()
    console.log(otp)
    if(formValue.otp===otp){
      this.router.navigate(['/correctcode'],{state:{data:this.currentUserData}}) 
    }else{
      this.showInvalidOtp();
    }

  }
  async getOtp(){
    var data = await Preferences.get({
      key:'validOtp'
    })
    return data.value;
  }
  async showInvalidOtp(){
    await Dialog.alert({
      title:'Invalid Otp',
      message:'Otp is Not Valid'
    })
  }
  

}
