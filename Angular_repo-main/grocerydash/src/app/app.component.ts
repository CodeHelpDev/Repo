import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonMenu, MenuController } from '@ionic/angular';
import { EventsService } from './services/events.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  urlValue: any;
  isVisible: boolean = false;
  isOrderVisible: boolean = false;
  idjWidth: boolean = false;

  isHide: boolean = true;
  isHidden: boolean = true;
  tempCount: boolean = false;
  constructor(
    public router: Router,
    public route: ActivatedRoute,
    public menu: MenuController,
    public events: EventsService
  ) {

    this.events.subscribe('reload', res => {
      this.isHide = !this.isHide;
      this.isHidden = this.isHide;
    })

    setTimeout(() => {
      this.urlValue = (this.router.url).replace('/', '')
    }, 200);
  }

  ngOnInit() {
    this.router.navigate(['/products']);
  }
  toggleMenu() {
    this.tempCount = !this.tempCount;
    if (this.tempCount === true) {
      this.isHide = false;
      this.isHidden = false;
      
    }
    if(this.tempCount===false){
      this.isHidden=true;
      this.isHide=true;
    }
  }


  routeTo(url: any) {
    if (url !== 'report') {
      this.isVisible = false;
    }
    this.router.navigate(['/' + url]);
    this.urlValue = url;
    console.log(url);
  }
  toggleReport() {
    if (this.isVisible === false) {
      this.isVisible = true
    } else {
      this.isVisible = false;
    }
  }
  orderToggle() {
    if (this.isOrderVisible === false) {
      this.isOrderVisible = true
    } else {
      this.isOrderVisible = false
    }
  }
  openMenu(event: any) {
    this.isHide = true;
    this.isHidden = true
  }
  closeMenu() {
    if (this.tempCount === false) {
      if (this.isHide == true) {
        this.isHidden = true;
      }

    } if (this.tempCount === true) {
      this.isHidden = false;
      this.isHide = false;
    }
  }
}


