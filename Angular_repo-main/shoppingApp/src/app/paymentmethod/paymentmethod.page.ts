import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paymentmethod',
  templateUrl: './paymentmethod.page.html',
  styleUrls: ['./paymentmethod.page.scss'],
})
export class PaymentmethodPage implements OnInit {

  constructor(
    public router:Router
  ) { }

  ngOnInit() {
    var data :any = this.router.getCurrentNavigation()?.extras.state;
    console.log(data.data);
  }

}
