import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from './services/common.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    public router:Router,
    public com:CommonService
  ) {}
  async ngOnInit() {
    var currentUser:any = await this.com.getCurrentUser();
    currentUser = JSON.parse(currentUser);
    if(currentUser){
      this.router.navigate(['/tabs/profile'])
    }else{
      this.router.navigate(['/login'])
    }
        
  }
}

