import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonService } from '../services/common.service';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { EventsService } from '../services/events.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  notificationNumber: any;
  isOpen: boolean = false;
  @Output() childClick = new EventEmitter<void>();

  constructor(
    public com: CommonService,
    public router: Router,
    public menu :MenuController,
    public events : EventsService
  ) { }

  ngOnInit() {
    this.getNoti()
    // this.menu.enable(true)
  }
  async getNoti() {
    var storedNoti = await this.com.getNotifications();
    storedNoti = JSON.parse(storedNoti);
    console.log(storedNoti)
    if (storedNoti) {
      this.notificationNumber = storedNoti.length
      console.log(this.notificationNumber, 'Hedaer');
    }
  }
 toggleMenu(event:any){
  this.events.publish('reload',1);
 }
 
  onClick() {
    this.childClick.emit(); // Emit the event
  }
}
