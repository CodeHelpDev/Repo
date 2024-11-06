import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../services/common.service';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {
  notificationForm: FormGroup = new FormGroup({})
  currentDate: any;
  currentTime: any;
  @ViewChild('childComponent') childComponent!: HeaderComponent; // Get reference to child component

  constructor(
    public router: Router,
    public com: CommonService
  ) { }

  ngOnInit() {
    this.notificationForm = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      date: new FormControl(''),
      time: new FormControl('')
    })
  }
  async onFormSubmit(formValue: any) {
    this.getCurrentDateTime();
    formValue.date = this.currentDate;
    formValue.time = this.currentTime;
    var storedNoti: any = await this.com.getNotifications();
    storedNoti = JSON.parse(storedNoti);
    if (storedNoti) {
      storedNoti = storedNoti.concat(formValue);
      this.com.setNotifications(storedNoti);
    } else {
      this.com.setNotifications([formValue]);
    }
    console.log(formValue);
    this.childComponent.getNoti();
    this.notificationForm.reset();
  }
  onCancelButton() {
    this.notificationForm.reset();
  }
  getCurrentDateTime() {
    const now = new Date();

    this.currentDate = now.toISOString().slice(0, 10);
    this.currentTime = now.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
    console.log(this.currentDate, this.currentTime)
  }
}