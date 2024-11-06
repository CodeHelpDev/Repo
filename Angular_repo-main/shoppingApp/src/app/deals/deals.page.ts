import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deals',
  templateUrl: './deals.page.html',
  styleUrls: ['./deals.page.scss'],
})
export class DealsPage implements OnInit {
  finalData: any = [];
  time: any;
  constructor(
    public service: ServiceService,
    public router:Router
  ) { }

  ngOnInit() {
    this.service.getDealsDataFromApi().subscribe((res: any) => {
      console.log(res);
      if (res) {
        res.forEach((element: any, index: any) => {
          var tempObj = {
            image: element.image,
            title: element.title,
            description: element.description,
            brand: element.brand,
            price: element.oldPrice,
          }
          this.finalData[index] = tempObj;
        });

        console.log(this.finalData)
      }
    })
 setInterval(() => {
  this.getTime();
  console.log('hii')
 }, 1000);


  }
  getTime() {
    var date = new Date();
    var time = date.toLocaleTimeString();
    console.log(time);
    this.time = time;
  }
  routeWithData(value:any){
    this.router.navigate(['/details'],{state:{data:value}})
  }


}
