import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-customcomponent',
  templateUrl: './customcomponent.page.html',
  styleUrls: ['./customcomponent.page.scss'],
})
export class CustomcomponentPage implements OnInit {
  isBackBlueVisible: boolean = true;
  days: any;
  hours: any;
  minutes: any;
  seconds: any;

  minutes1: any;
  hours1: any;
  seconds1: any;

  minutes3: any;
  seconds3: any;
  seconds4:any;

  codeSnippet1: string = `<app-checkbox-wrapper class="custom-checkbox">
  <ion-checkbox checked="true"></ion-checkbox>
  <ion-label>Sample Checkbox</ion-label>
</app-checkbox-wrapper>`;

  codeSnippet2: string = `app-checkbox-wrapper.custom-checkbox {
  background: #CCC;
  color: #000;

  &.checkbox-checked {
    background: #00AFFF;
    color: #FFF;
  }
}`;
  codeSnippet3: string = `<app-show-hide-password>
  <ion-input type="password" placeholder="Try setting a password" value="It's a secret!"></ion-input>
</app-show-hide-password>`;
  codeSnippet4: string = `<app-countdown-timer [units]="{from: 'day', to: 'second'}" [end]="countdownDate"></app-countdown-timer>
`;
  codeSnippet5: string = `<app-countdown-timer [units]="{from: 'day', to: 'minute'}" [end]="countdownDate"></app-countdown-timer>`;
  codeSnippet6: string = `
<app-countdown-timer [units]="{from: 'hour', to: 'second'}" [end]="countdownDate"></app-countdown-timer>
`;
  codeSnippet7: string = `
<app-countdown-timer [units]="{from: 'hour', to: 'minute'}" [end]="countdownDate"></app-countdown-timer>
`;
  codeSnippet8: string = `<app-countdown-timer [units]="{from: 'minute', to: 'second'}" [end]="countdownDate"></app-countdown-timer>
`;
codeSnippet9:string = `<app-countdown-timer [units]="{from: 'day', to: 'day'}" [end]="countdownDate"></app-countdown-timer>
`;
codeSnippet10:string=`<app-countdown-timer [units]="{from: 'hour', to: 'hour'}" [end]="countdownDate"></app-countdown-timer>
`;
codeSnippet11:string= `<app-countdown-timer [units]="{from: 'minute', to: 'minute'}" [end]="countdownDate"></app-countdown-timer>
`;
codeSnippet12:string=`<app-countdown-timer [units]="{from: 'second', to: 'second'}" [end]="countdownDate"></app-countdown-timer>
`;
codeSnippet13:string=`app-countdown-timer {
  --countdown-fill-border: none;
  --countdown-fill-border-radius: 10px;
  --countdown-fill-background: #FFFFFF;
  --countdown-fill-shadow: 0px 0px 5px 0px rgba(0,0,0, 0.2);
}`;
codeSnippet14:string=`app-countdown-timer {
  --countdown-fill-background: #000000;
  --countdown-value-color: #FFFFFF;
  --countdown-unit-color: #F2F2F2;
}`;
codeSnippet15:string=`app-countdown-timer {
  --countdown-margin: 0px;
  --countdown-padding: 0px;
  --countdown-time-margin: 0px;
  --countdown-time-padding: 0px;
  --countdown-inner-time-margin: 2px;
  --countdown-inner-time-padding: 0px;
}`;
codeSnippet16:string=`app-countdown-timer {
  --countdown-time-flex-direction: row-reverse;
}`;
codeSnippet17:string=`app-countdown-timer {
  --countdown-time-flex-direction: row;
}`;
codeSnippet18:string=`app-countdown-timer {
  --countdown-time-flex-direction: column;
}`;
codeSnippet19:string=`app-countdown-timer {
  --countdown-time-flex-direction: column-reverse;
}`;
codeSnippet20:string=`<app-countdown-timer fill="countdown" [end]="countdownDate" [units]="{from: 'hour', to: 'second'}"></app-countdown-timer>
`;
codeSnippet21:string=`<app-countdown-timer fill="time" [end]="countdownDate" [units]="{from: 'hour', to: 'second'}"></app-countdown-timer>
`;
codeSnippet22:string=`<app-countdown-timer fill="time" [end]="countdownDate" [units]="{from: 'hour', to: 'second'}"></app-countdown-timer>
`;
codeSnippet23:string=`<app-countdown-timer fill="inner-time" [end]="countdownDate" [units]="{from: 'hour', to: 'second'}"></app-countdown-timer>
`;
  constructor() { }

  ngOnInit() {
    this.getDateTime();
    setInterval(() => {
      this.getDateTime();
    }, 1000);
  }
  checkColor(event: any) {
    console.log(event.target.checked);
    if (event.target.checked === true) {
      this.isBackBlueVisible = false;
    } else {
      this.isBackBlueVisible = true
    }
  }
  getDateTime() {
    var test: any = new Date();
    var test1: any = new Date();

    const birthday: any = new Date(2024, 9, 15); // Example: November 15, 2024


    const now: any = new Date();

    // Calculate the time difference between now and the birthday
    console.log('birthday', birthday, 'now', now)
    let timeDiff = birthday - now;

    // If the birthday has passed this year, set it for next year
    if (timeDiff < 0) {
      birthday.setFullYear(birthday.getFullYear() + 1);
      timeDiff = birthday - now;
    }
    console.log(timeDiff)
    // Calculate days, hours, minutes, and seconds
    this.days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    this.hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    this.minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    this.seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    this.hours1 = Math.floor(timeDiff / 3600 / 1000);
    this.minutes1 = Math.floor(timeDiff % (3600 * 1000) / (60 * 1000));
    this.seconds1 = Math.floor(timeDiff % (60 * 1000) / 1000);

    this.minutes3 = Math.floor(timeDiff / (60 * 1000));
    this.seconds3 = Math.floor(timeDiff % (60 * 1000) / (1000))

    this.seconds4 = Math.floor(timeDiff/1000)
  }
}
