import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  products: any;
  constructor(
    public service: ServiceService,
    public storage:StorageService
  ) { }

  ngOnInit() {
    var logInUser =this.storage.get('loginUser');
    console.log('loginUser',logInUser);
  }
  ionViewWillEnter() {
    this.service.getAllProducts().subscribe(res => {
      // console.log(res)
      this.products = res;
      console.log('products', this.products);
    }, err => {
      console.log(err)
    });
  }
}
