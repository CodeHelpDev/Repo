import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewcategory',
  templateUrl: './viewcategory.page.html',
  styleUrls: ['./viewcategory.page.scss'],
})
export class ViewcategoryPage implements OnInit {
  productData:any;
  constructor(
    public router:Router
  ) { }

  ngOnInit() {
    var data :any = this.router.getCurrentNavigation()?.extras.state
    console.log(data.data)
    this.productData = data.data;
  }

}
