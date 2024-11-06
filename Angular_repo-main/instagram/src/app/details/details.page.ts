import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  post:any;
  constructor(
    public route:ActivatedRoute
  ) {
    this.route.queryParams.subscribe(res=>{
      console.log(res);
      this.post=res;
    })
   }

  ngOnInit() {
  }

}
