import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  cityForm!: FormGroup;
  city: any;
  constructor(
    public router: Router,
    public modal: ModalController,
    
  ) { }

  ngOnInit() {
    this.cityForm = new FormGroup({
      city: new FormControl('', Validators.required)
    })
    this.setCity();
  }
  nav() {
    console.log('iii');
    this.router.navigate(['/new-cars']);
  }
  move() {
    console.log('Moved');
    this.router.navigate(['/likes']);
  }
  cityDetails(val: any) {
    localStorage.setItem('location', JSON.stringify(val));
    this.cityForm.reset();
    this.modal.dismiss();
    this.ngOnInit();
  }
  setCity() {
    var userCity: any = localStorage.getItem('location');
    if (userCity !== null) {
      userCity = JSON.parse(userCity);
      console.log(userCity.city);
      this.city = userCity.city;
    }
  }
}
