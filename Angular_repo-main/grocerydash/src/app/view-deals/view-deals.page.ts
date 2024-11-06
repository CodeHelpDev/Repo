import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-deals',
  templateUrl: './view-deals.page.html',
  styleUrls: ['./view-deals.page.scss'],
})
export class ViewDealsPage implements OnInit {
  productDetails:any
  constructor(
    public router: Router
  ) { }

  async ngOnInit() {
    var data: any = this.router.getCurrentNavigation()?.extras.state;
    console.log(data.data)
    this.productDetails = data.data;
  }

}
