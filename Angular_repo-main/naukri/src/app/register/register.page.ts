import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Preferences } from '@capacitor/preferences';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  regForm!:FormGroup;
  isAlertOpen = false;
  alertButtons = ['Okay'];
  isEmailAlert= false;
  emailAlert = ['Okay'];
  registeredUser:any=[];

  constructor() { 
    this.getData();
  }

  ngOnInit() {
    this.regForm = new FormGroup({
      name : new FormControl('',Validators.required),
      email : new FormControl('',Validators.required),
      password : new FormControl('',Validators.required),
      mobileno : new FormControl('',Validators.required),
      workStatus : new FormControl('',Validators.required)
    })
  }

  reg(regValue:any){ 
    
    var str = regValue.mobileno;
    var mobilePattern = new RegExp("^[0-9]{10}$"); 
    var emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 
    if(emailPattern.test(regValue.email)){
      
      if(mobilePattern.test(str)){
        var arr:any=[];
        arr.push(regValue);
        this.getData().then((res:any)=>{
        console.log('res',res);
          var storedData:any =res;
          storedData = JSON.parse(storedData);
          console.log('storedData',storedData);
          if(storedData===null){
            console.log('user Nul');
            this.setData(JSON.stringify([regValue]));
            this.regForm.reset();
          }else{
            var storedUser = storedData.find((user:any)=>{
              if(user.email===regValue.email){
                return user;
              }
            })
            if(storedUser){
              console.log('storedUser',storedUser,'User Present ');
            }
            else{
              storedData = storedData.concat(arr);
              this.setData(JSON.stringify(storedData));
              this.regForm.reset();
            }
          }
        });      
      }
      else{
        console.log('Invalid Mobile Number');
        this.isAlertOpen=true;
      }
    }else{
      console.log('Invalid');
      this.isEmailAlert = true;
    }
    //Phone Number Validation 
    // this.regForm.reset();
  }
  setOpen(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }
  async setData(data:any){
    await Preferences.set({
      key:'userData',
      value:data
    })
    console.log('Set Data Done');
  }
  async getData(): Promise <any>{
     var storedData:any= await Preferences.get({
      key:'userData'
    })
    return (storedData.value);
  }
 
}
