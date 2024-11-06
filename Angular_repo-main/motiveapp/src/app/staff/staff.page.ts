import { preserveWhitespacesDefault } from '@angular/compiler';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Dialog } from '@capacitor/dialog';
import { Preferences } from '@capacitor/preferences';

declare var jQuery: any

@Component({
  selector: 'app-staff',
  templateUrl: './staff.page.html',
  styleUrls: ['./staff.page.scss'],
})
export class StaffPage implements OnInit {
  segmentValue: any = 'games';
  addStaffForm: FormGroup = new FormGroup({});
  validEmpCode: any;
  isModalOpen: boolean = false;
  emp: any;
  chatForm: FormGroup = new FormGroup({});
  chatMessages: any = [];
  participantData: any;
  filteredArray: any = [];
  msgform: FormGroup = new FormGroup({})
  dualMessageArr: any = [];
  @ViewChild('Content') content: any;
  @ViewChild('target') target: any;
  constructor(
    public router: Router,
    public route: ActivatedRoute
  ) {
    this.assEmpcode();
  }
  ionViewDidLoad() {


  }


  ngOnInit() {
    this.displayChat();
    this.addStaffForm = new FormGroup({
      empCode: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      mobileno: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required)
    })
    this.chatForm = new FormGroup({
      message: new FormControl('', Validators.required)
    })
    this.msgform = new FormGroup({
      firUserMsg: new FormControl('', Validators.required)
    })
    this.route.params.subscribe((res: any) => {
      if (res.key == 'chat') {
        this.segmentValue = res.key;
      } else if (res.key == 'teams') {
        this.segmentValue = res.key;
      }
      else {
        this.segmentValue = 'games';
      }
    })
  }

 async searchMsg(event:any){
    console.log(event.target.value);
    var storedMsg:any= await this.getDualChat();
    storedMsg = JSON.parse(storedMsg);
    if(this.dualMessageArr && storedMsg){
      this.dualMessageArr = storedMsg.filter((x:any)=>(((x.secondUserMsg) || (x.firUserMsg)).toLowerCase()).includes((event.target.value).toLowerCase()))
    }
    console.log(storedMsg);
    
  }
  async searchStaff(e: any) {
    var storedUser: any = await this.getParticipantData();
    storedUser = JSON.parse(storedUser);
    if (storedUser) {
      this.filteredArray = storedUser.filter((x: any) => ((x.participantName).toLowerCase()).includes((e.target.value).toLowerCase()));
      this.participantData = this.filteredArray;
    }
  }
  async userMsgSend(msgValue: any) {
    if (msgValue.firUserMsg !== null && msgValue.firUserMsg !== "") {
      var date = new Date();
      var currentdate: any = date.toLocaleDateString();
      var msgTime: any = date.toLocaleTimeString(navigator.language, { hour: '2-digit', minute: '2-digit' });
      msgValue.time = msgTime;
      msgValue.date = currentdate;
      var storedMsg: any = await this.getDualChat();
      storedMsg = JSON.parse(storedMsg);
      if (storedMsg) {
        storedMsg = storedMsg.concat(msgValue);
        this.setDualChat(storedMsg);
      } else {
        this.setDualChat([msgValue])
      }
    }else{
      console.log('Message Can not be Null Or Empty');
    }
    this.msgform.reset();
    this.displayDualChat();
  }
  async setDualChat(data: any) {
    await Preferences.set({
      key: 'dualChat',
      value: JSON.stringify(data)
    })
  }
  async getDualChat() {
    var data = await Preferences.get({
      key: 'dualChat'
    })
    return data.value;
  }
  async displayDualChat() {
    var messages: any = await this.getDualChat();
    messages = JSON.parse(messages);
    if (messages) {
      this.dualMessageArr = messages;
    }
    setTimeout(function () {
      var objDiv: any = document.getElementById("chats");
      if (objDiv != null) {
        objDiv.scrollTop = objDiv?.scrollHeight;
      }
    }, 0)
  }
  async sendMsg(message: any) {
    var storedChat: any = await this.getChat();
    storedChat = JSON.parse(storedChat);
    if (storedChat) {
      storedChat = storedChat.concat(message);
      this.setChat(storedChat)
    } else {
      this.setChat([message]);
    }
    this.chatForm.reset();
    this.displayChat();
  }
  async assEmpcode() {
    var data: any = await this.getData();
    data = JSON.parse(data);
    setTimeout(() => {
      if (data) {
        this.validEmpCode = data;
        this.emp = this.validEmpCode.length + 1;
      } else {
        this.emp = 1
      }
    }, 1000);
  }
  async ionViewWillEnter() {
    this.showData();
    this.displayDualChat();
  }
  async deleteParticipants(index: any) {
    if (this.participantData) {
      this.participantData.splice(index, 1);
      this.setParticipantData(this.participantData);
    }
    this.showData();
  }
  segValue(event: any) {
    this.segmentValue = event.target.value;
    this.assEmpcode();
    this.displayDualChat();
  }
  async formSubmit(formValue: any) {
    var storedData: any = await this.getData();
    storedData = JSON.parse(storedData);
    console.log(storedData);
    if (storedData) {
      var regUser: any = storedData.find((x: any) => {
        if (x.email === formValue.email) {
          return x
        }
      })
      if (regUser) {
        this.showAlert();
      } else {
        storedData = storedData.concat(formValue);
        this.setData(storedData);
        this.addStaffForm.reset();
        this.assEmpcode();
      }
    } else {
      this.setData([formValue]);
      this.addStaffForm.reset();
      this.assEmpcode();
    }

  }
  async showData() {
    var data: any = await this.getParticipantData();
    data = JSON.parse(data);
    this.participantData = data;
  }
  async getParticipantData() {
    var data = await Preferences.get({
      key: 'participantForm'
    })
    return data.value;
  }
  async setParticipantData(data: any) {
    await Preferences.set({
      key: 'participantForm',
      value: JSON.stringify(data)
    })
  }
  async deleteUser(index: any) {
    var storedUsers: any = await this.getData();
    storedUsers = JSON.parse(storedUsers);
    storedUsers.splice(index, 1)
    this.setData(storedUsers);
    this.assEmpcode();
  }
  async setData(data: any) {
    await Preferences.set({
      key: 'staffData',
      value: JSON.stringify(data)
    })
  }
  async getData() {
    var data = await Preferences.get({
      key: 'staffData'
    })
    return data.value;
  }
  async showAlert() {
    await Dialog.alert({
      title: 'Please Enter Different Email',
      message: 'Registered User'
    })
  }
  async setChat(data: any) {
    await Preferences.set({
      key: 'adminChat',
      value: JSON.stringify(data)
    })
  }
  async getChat() {
    var data = await Preferences.get({
      key: 'adminChat'
    })
    return data.value;
  }
  async displayChat() {
    var chat: any = await this.getChat();
    chat = JSON.parse(chat);
    this.chatMessages = chat;
  }
}
