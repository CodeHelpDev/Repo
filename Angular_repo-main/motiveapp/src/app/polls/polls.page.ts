import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Preferences } from '@capacitor/preferences';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-polls',
  templateUrl: './polls.page.html',
  styleUrls: ['./polls.page.scss'],
})
export class PollsPage implements OnInit {
  segmentVal: any = 'all';
  replyMsgform: FormGroup = new FormGroup({});
  msgTime: any;
  msgDate: any;
  dualChatArray: any = [];
  displayEventArray: any = [];
  createEventForm: FormGroup = new FormGroup({});
  currentUser: any = this.service.currentUser;

  constructor(
    public service: ServiceService
  ) {
    console.log('constructor')
    console.log(this.currentUser)
  }

  ngOnInit() {
    console.log('ngOnInit');
    // console.log(this.segmentVal);
    this.replyMsgform = new FormGroup({
      secondUserMsg: new FormControl('', Validators.required)
    })
    this.createEventForm = new FormGroup({
      eventName: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    })
  }
  async searchEvent(event: any) {
    var searchedValue: any = event.target.value;
    var data: any = await this.getEvent();
    data = JSON.parse(data)
    console.log(data);
    if (this.displayEventArray && searchedValue) {
      this.displayEventArray = data.filter((x:any)=>((x.eventName).toLowerCase()).includes((searchedValue).toLowerCase()));
    }
    else{
      this.displayEventArray = data;
    }
    console.log(event.target.value);
  }
  async saveEvent(formValue: any) {
    var date = new Date();
    var createdDate: any = date.toLocaleDateString();
    var createdTime: any = date.toLocaleTimeString();
    formValue.createdBy = this.currentUser;
    formValue.createdDate = createdDate;
    formValue.createdTime = createdTime;
    console.log('formValue', formValue);
    var storedEvent: any = await this.getEvent();
    storedEvent = JSON.parse(storedEvent);
    if (storedEvent) {
      storedEvent = storedEvent.concat(formValue)
      this.setEvent(storedEvent);
    } else {
      this.setEvent([formValue]);
    }
    this.createEventForm.reset();
    this.displayEventData();
  }

  async displayEventData() {
    var data: any = await this.getEvent();
    data = JSON.parse(data)
    console.log(data);
    this.displayEventArray = data;
    console.log('this.displayEventArray',this.displayEventArray);
  }
  async setEvent(data: any) {
    await Preferences.set({
      key: 'eventData',
      value: JSON.stringify(data)
    })
  }
  async getEvent() {
    var data: any = await Preferences.get({
      key: 'eventData'
    })
    return data.value;
  }
  ionViewWillEnter() {
    console.log('ionViewWillEnter');
    // setTimeout(() => /{
    console.log('diplay Chat');
    this.displayChat();
    this.displayEventData();
    // }, 0);
  }
  segValue(event: any) {
    this.segmentVal = event.target.value;
    if (this.segmentVal === 'chat') {
      this.displayChat();
    } else if (this.segmentVal === 'all') {
      this.displayEventData();
    }
  }

  async searchMsg(event: any) {
    var storedData: any = await this.getChats();
    storedData = JSON.parse(storedData);
    if (this.dualChatArray && storedData) {
      this.dualChatArray = storedData.filter((x: any) => (((x.secondUserMsg) || (x.firUserMsg)).toLowerCase()).includes((event.target.value).toLowerCase()))
    }
  }
  async userMsgSend(formValue: any) {
    if (formValue.secondUserMsg != "" && formValue.secondUserMsg != null) {
      var date = new Date();
      this.msgTime = date.toLocaleTimeString(navigator.language, { hour: '2-digit', minute: '2-digit' });
      this.msgDate = date.toLocaleDateString();
      formValue.replyTime = this.msgTime;
      formValue.replyDate = this.msgDate;
      var storedChats: any = await this.getChats();
      storedChats = JSON.parse(storedChats);
      if (storedChats) {
        storedChats = storedChats.concat(formValue);
        this.setChats(storedChats);
      } else {
        this.setChats([formValue]);
      }
    } else {
      console.log('Meassege can not be Null or Empty');
    }
    this.replyMsgform.reset();
    this.displayChat();

  }
  async displayChat() {
    var storedChats: any = await this.getChats();
    if (storedChats) {
      storedChats = JSON.parse(storedChats);
      this.dualChatArray = storedChats;
      setTimeout(function () {
        var chatContainer: any = document.getElementById("scroll");
        console.log(chatContainer)
        if (chatContainer != null) {
          chatContainer.scrollTop = chatContainer?.scrollHeight
        }
      }, 0);
    }
  }
  async setChats(data: any) {
    await Preferences.set({
      key: 'dualChat',
      value: JSON.stringify(data)
    })
  }
  async getChats() {
    var data = await Preferences.get({
      key: 'dualChat'
    })
    return data.value
  }
}
