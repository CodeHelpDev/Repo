import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Preferences } from '@capacitor/preferences';

@Component({
  selector: 'app-validateotp',
  templateUrl: './validateotp.page.html',
  styleUrls: ['./validateotp.page.scss'],
})
export class ValidateotpPage implements OnInit {
  number: any;
  otp: any;

  constructor(
    public route: ActivatedRoute,
    public router:Router
  ) { }

  ngOnInit() {

    this.number = history.state.data;
    console.log(this.number);
    this.generateOtp();
  }
  verifyOtp() {
    var userOtp:any = document.getElementById('userOtp');
    userOtp=userOtp.value;
    console.log('User OTP',typeof(userOtp));
    console.log('this OTP',typeof(this.otp));

    if(this.otp && this.number && userOtp){
      if(this.otp==userOtp){
        console.log('OTP Matched');
        var obj={
          number:this.number,
          otp:this.otp
        }
        this.router.navigate(['/home']);
        this.setUser(obj);
      }else{
        console.log('OTP Does Not Martched ');
      }      
    }else{
      console.log('Otp or Number Not found');
    }

  }
  generateOtp() {
    var tempOtp = Math.floor(1000 + Math.random() * 9000);
    this.otp = tempOtp
    console.log('valid OTP ',this.otp);
  }
  async setUser(data:any){
    await Preferences.set({
      key:'userDetails',
      value:JSON.stringify(data)
    })
    
  }

}
