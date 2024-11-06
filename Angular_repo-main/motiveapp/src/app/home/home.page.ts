import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Preferences } from '@capacitor/preferences';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  currentUrl:any;
  loginForm:FormGroup=new FormGroup({});
  constructor(
    public menu:MenuController,
    public router:Router
  ) {}
  ngOnInit(){
    this.loginForm= new FormGroup({
      email: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required),
      // role: new FormControl('',Validators.required)
    })
  
  }
 async loginUser(formValue:any){
    var storedUser:any= await this.getUserData();
    storedUser= JSON.parse(storedUser);
    if(storedUser){
      // storedUser = storedUser.concat(formValue);
      // this.setFormValue(storedUser);
      // this.resetFormWithRoute();

       var data = storedUser.find((x:any)=>{
        if(x.email===formValue.email && x.password===formValue.password){
          return x;
        }
      })
      if(data){
        console.log('data',data);
        this.setCurrentUser([data])
        this.resetFormWithRoute();
      }else{
        console.log('Invalid User');
      }
    }else{
      this.setFormValue([formValue]);
      this.resetFormWithRoute();
    }
    console.log(storedUser);

  }
  resetFormWithRoute(){
    this.loginForm.reset();
    this.router.navigate(['/ourevent']);
    this.menu.enable(true)
    this.currentUrl='/ourevent';
    this.router.navigate(['/ourevent']);
  }

  async setCurrentUser(data:any){
    await Preferences.set({
      key:'currentUser',
      value:JSON.stringify(data)
    })
  }
  ionViewWillEnter(){
    this.menu.enable(false)
  }

  async setFormValue(data:any){
    await Preferences.set({
      key:'userData',
      value:JSON.stringify(data)
    })
  }
  async getUserData(){
    var data = await Preferences.get({
      key:'userData'
    })
    return data.value
  }
  signIn(){
    // this.menu.enable(true)
    // this.currentUrl='/ourevent';
    // this.router.navigate(['/ourevent']);
  }
}
