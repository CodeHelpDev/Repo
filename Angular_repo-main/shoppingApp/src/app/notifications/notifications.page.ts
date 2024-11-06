import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {
dataArray:any=[]
  constructor(
    public service: ServiceService
  ) { }

  ngOnInit() {
    this.service.getNotificationDataFromApi().subscribe((res:any)=>{
      console.log(res.posts);
      this.dataArray=res.posts;
    })

  }

}
