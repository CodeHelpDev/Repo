import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Dialog } from '@capacitor/dialog';
import { Preferences } from '@capacitor/preferences';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {
  welcomeForm:FormGroup=new FormGroup({});
  constructor(
    public router:Router
  ) { }

  ngOnInit() {
    this.welcomeForm= new FormGroup({
      email: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required)
    })
  }
 async onFormSubmit(formValue:any){
    console.log(formValue);
    var storedUsers:any= await this.getUsers();
    storedUsers=JSON.parse(storedUsers);
    if(storedUsers){
      var registeredUser= storedUsers.find((x:any)=>{
        if(x.email===formValue.email && x.password===formValue.password){
          return x;
        }
      })
      console.log(registeredUser);
      if(registeredUser){
        this.setLoginUser([registeredUser]);
        this.welcomeForm.reset();
        this.router.navigate(['/tabs/home'])        
      }else{
        this.showAlert();
      }
    }
  }
  async getUsers(){
   var data =  await Preferences.get({
      key:'signUpUser'
    })
    return data.value;    
  }
  async setLoginUser(data:any){
    await Preferences.set({
      key:'currentUser',
      value:JSON.stringify(data)
    })
  }
  async showAlert(){
    await Dialog.alert({
      title:'Invalid Email or Password',
      message:'Email invalid Email or Password'
    })
  }

}
