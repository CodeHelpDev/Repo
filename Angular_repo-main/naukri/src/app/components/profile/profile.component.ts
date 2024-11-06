import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UserFormComponent } from '../user-form/user-form.component';
import { Preferences } from '@capacitor/preferences';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent  implements OnInit {
  currentUser:any;
  user:any;
  constructor(
    public modalCtrl: ModalController
  ) {
    this.getUser();
   }

  ngOnInit() {
    this.getUser();

    // var userData: any = localStorage.getItem('loginUser');
    // userData = JSON.parse(userData);
    // console.log('user',userData);
    // var loginUser= localStorage.getItem('currentUser');
    // console.log('loginUser',loginUser);
    // if(userData===null){
    //   this.currentUser= 'Test';
    // }else{
    //   userData.find((x:any)=>{
    //     if(x.email===loginUser){
    //       console.log('X',x);
    //       this.currentUser= x;
    //     }
        
    //   })
    // }
   
  }

  async openModal(){
    const modal = await this.modalCtrl.create({
     component:UserFormComponent
    })
    modal.present();
  }
  async getUserData(){
    var userData = await Preferences.get({
      key:'currentUser'
    })
    return userData.value;
  }

  getUser(){
    this.getUserData().then((res:any)=>{
      this.user=JSON.parse(res);

      console.log('ertyuihojk',this.user.name);
      
    })
  }

}
