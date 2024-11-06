import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';
import { NavigationExtras, Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-mobileno',
  templateUrl: './mobileno.page.html',
  styleUrls: ['./mobileno.page.scss'],
})
export class MobilenoPage implements OnInit {
  countryData: any;
  isdisabled: boolean = true;
  number: any;
  countryCodeValue: any;
  constructor(
    public navCtrl: NavController,
    public service: ServiceService,
    public router:Router
  ) { }

  ngOnInit() {

  }
  ionViewWillEnter() {
    this.getData();
  }

  getData() {
    this.service.getCountryData().subscribe(res => {
      this.countryData = res;
      console.log('this.countryData', this.countryData);
    }, err => {
      console.log(err)
    })
  }

  numberValues(value: any) {
    this.number = (value.target.value);
    if (this.number.length > 9 && this.countryCodeValue) {
      this.isdisabled = false;
    } else {
      this.isdisabled = true;
    }
  }
  countryCode(event: any) {
    this.countryCodeValue = (event.target.value);
    if (this.countryCodeValue && this.number?.length > 9) {
      this.isdisabled = false;
    } else {
      this.isdisabled = true;
    }
  }
  submitNumberValue() {
    this.number=this.countryCodeValue.concat(this.number);
    console.log('this.number',this.number);
    if (this.number) {
      this.router.navigate(['/validateotp'], { state: { data: this.number } })
    }

  }
}
