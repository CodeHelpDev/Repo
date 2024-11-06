import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../services/common.service';



@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  

  selectedChat:any;
  userData:any = ['User1','User2','User3'];
  messageArray:any=[];
  sendMsgForm:FormGroup =  new FormGroup({});
  constructor(
    public com:CommonService
  ) { }

  ngOnInit() {
    this.sendMsgForm = new FormGroup({
      msg: new FormControl('',Validators.required)
    })
  }
  async ionViewWillEnter(){
    this.getData();   
  }
 async getData(){
    var storedChat:any = await this.com.getMessage();
    storedChat = JSON.parse(storedChat);
    if(storedChat){
      this.messageArray = storedChat;
      setTimeout(() => {
        console.log(this.messageArray);
        var coc:any = document.getElementById('scroll')
        if(coc!==null){
          coc.scrollTop = coc?.scrollHeight
        }
      }, 10);
    }
  }

  activeChat(value:any){
    this.getData();
    this.selectedChat=value
  }
  async sendMsg(meassage:any,user:any){
    meassage.sentBy = user;
    console.log(meassage)
    var storedMsg:any = await this.com.getMessage();
    storedMsg = JSON.parse(storedMsg);
    if(storedMsg){
      storedMsg = storedMsg.concat(meassage);
      this.com.setMessage(storedMsg);
    }else{
      this.com.setMessage([meassage]);
    }
    this.sendMsgForm.reset();
    this.getData();
  }
}
