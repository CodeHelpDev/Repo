import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-requestmoney',
  templateUrl: './requestmoney.page.html',
  styleUrls: ['./requestmoney.page.scss'],
})
export class RequestmoneyPage implements OnInit {
  display: any = '0';
  constructor() { }

  ngOnInit() {
  }
  click(str: any) {
    console.log('hdfvu', this.display.length);
    if (this.display === '0') {
      this.display = str;
    } else {
      this.display += str;
    }
    console.log(this.display);

  }
  delButton(disp: any) {
    console.log(disp.length,'c');
    if (disp==="" || disp===null) {
      this.display = '0';
    } else {
      var newVal = disp.substring(0, disp.length - 1)
      console.log(newVal)
      this.display = newVal;

    }

  }

}
