import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formvali',
  templateUrl: './formvali.page.html',
  styleUrls: ['./formvali.page.scss'],
})
export class FormvaliPage implements OnInit {
  checkName: boolean = false;
  isfname: boolean = false;
  islname: boolean = false;
  isEmail: boolean = false;
  isPhone: boolean = false;
  isPassword: boolean = false;
  isCPassword: boolean = false;
  countingNumber: number = 0;
  countingRoom: number = 0;
  roomWarning: Boolean = false;
  termsWarning: boolean = false;

  constructor() { }

  ngOnInit() {
    console.log(this.termsWarning)
  }
  checkUserName(event: any) {
    var value: any = event.target.value;
    if (value) {
      this.checkName = false;
    } else {
      this.checkName = true;
    }
    console.log(event.target.value);
  }
  checkFname(event: any) {
    var value: any = event?.target.value;
    if (value) {
      this.isfname = false;
    } else {
      this.isfname = true;
    }
  }
  checkLname(event: any) {
    var value: any = event.target.value;
    if (value) {
      this.islname = false;
    } else {
      this.islname = true;
    }
  }
  checkEmail(event: any) {
    var value: any = event.target.value;
    if (value) {
      this.isEmail = false;
    } else {
      this.isEmail = true;
    }
  }
  checkPhone(event: any) {
    var value: any = event.target.value;
    if (value) {
      this.isPhone = false;
    } else {
      this.isPhone = true;
    }
  }
  checkPassword(event: any) {
    var value: any = event.target.value;
    if (value) {
      this.isPassword = false;
    } else {
      this.isPassword = true;
    }

  }
  checkCPassword(event: any) {
    var value: any = event.target.value;
    if (value) {
      this.isCPassword = false;
    } else {
      this.isCPassword = true;
    }
  }
  counting(event: any) {
    if (this.countingNumber >= 0) {
      if (event === 'minus' && this.countingNumber >= 0) {
        this.countingNumber -= 1;
      } else if (event === 'plus' && this.countingNumber >= 0) {
        this.countingNumber += 1;
      }
    }
    if (this.countingNumber < 0) {
      this.countingNumber = 0;
    }
  }
  countRoom(event: any) {
    this.roomWarning = false;
    if (event === 'minus') {
      this.countingRoom -= 1;
    } else if (event === 'plus') {
      this.countingRoom += 1;
    }
    if (this.countingRoom < 0 || this.countingRoom > 5) {
      this.roomWarning = true;
    }
  }
  acceptTerms(event: any) {
    var checkValue: any = event.currentTarget.checked;
    console.log(checkValue);
    if (checkValue === true) {
      this.termsWarning = true;
    } else {
      this.termsWarning = false;;
    }
  }
}
