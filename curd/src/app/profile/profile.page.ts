import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
currentUser:any=[];
  constructor(
    public com:CommonService,
    public router:Router
  ) { }

 async ngOnInit() {
    var user:any = await this.com.getCurrentUser();
    user = JSON.parse(user);
    if(user){
      this.currentUser=user;
    }
  }

  editUser(val:any){
    this.router.navigate(['/updateprofile'],{state:{data:val}});
  }
}
