import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { register } from 'swiper/element/bundle';
import { ServiceService } from '../services/service.service';
import { AppComponent } from '../app.component';

register();

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  activeTab: any = 'home';
  constructor(
    public router: Router,
    public service:ServiceService,
    public com:AppComponent
  ) { }

  ngOnInit() {
    this.com.ionViewWillEnter();
  }

  ionViewWillEnter() {


  }
  openMenu(){
    
  }
}
