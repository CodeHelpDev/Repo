import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.page.html',
  styleUrls: ['./chats.page.scss'],
})
export class ChatsPage implements OnInit {
users:any
  constructor(
    public service : ServiceService
  ) { }

  ngOnInit() {
    this.getChats();
  }
  getChats(){
    this.service.getUsersData().subscribe((res:any)=>{
      this.users = res.users;
      console.log(this.users);    
    })
  }

}
