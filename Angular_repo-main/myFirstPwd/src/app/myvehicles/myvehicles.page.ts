import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-myvehicles',
  templateUrl: './myvehicles.page.html',
  styleUrls: ['./myvehicles.page.scss'],
})
export class MyvehiclesPage implements OnInit {
  URL:any;
  loginUser:any;
  constructor(
    public router:Router
  ) { 
    this.URL = this.router.url;
  }

  ngOnInit() {
  }
  logOut(){

  }

}
