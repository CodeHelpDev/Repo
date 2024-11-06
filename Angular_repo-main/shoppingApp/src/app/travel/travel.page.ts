import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.page.html',
  styleUrls: ['./travel.page.scss'],
})
export class TravelPage implements OnInit {
  categoryArray: any = [];
  backgroundImage: any;
  constructor(
    public service: ServiceService,
    public router: Router,
    
  ) { }

  ngOnInit() {
    this.getData();
  }
  async getData() {
    var data: any = await this.service.getCategoryDataFromApi();
    data.subscribe((res: any) => {
      console.log(res)
      this.categoryArray = res;
      this.backgroundImage = this.categoryArray.image

    })

  }
  routeToDetail(prod: any) {
    console.log(prod)
    this.router.navigate(['/details'],{state:{data:prod}});
    
  }
}
