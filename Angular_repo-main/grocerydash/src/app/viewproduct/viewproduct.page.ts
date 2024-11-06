import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.page.html',
  styleUrls: ['./viewproduct.page.scss'],
})
export class ViewproductPage implements OnInit {
productData:any;
  constructor(
    public router:Router
  ) { }

  ngOnInit() {
    var data :any = this.router.getCurrentNavigation()?.extras.state;
    console.log(data.data);
    this.productData = data.data;
    console.log(this.productData.image)
  }

}
