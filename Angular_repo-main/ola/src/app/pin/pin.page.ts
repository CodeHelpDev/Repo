import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pin',
  templateUrl: './pin.page.html',
  styleUrls: ['./pin.page.scss'],
})
export class PinPage implements OnInit {
  pin: any;
  rideDetils: any;
  constructor() { }

  ngOnInit() {
    this.rideDetils = history.state.data;
    console.log(this.rideDetils);


    this.generatePin();
  }
  generatePin() {
    var pin = Math.floor(1000 + (Math.random() * 9000));
    console.log(pin);
    this.pin = pin;
  }

}
