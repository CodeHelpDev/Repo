import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fashion',
  templateUrl: './fashion.page.html',
  styleUrls: ['./fashion.page.scss'],
})
export class FashionPage implements OnInit {
  productData: any = [];
  finalDataArray:any=[];
  constructor(
    public service: ServiceService,
    public router:Router
  ) { }

  ngOnInit() {
    this.getData();
  }
  async getData() {
    var data: any = (await this.service.getFashionDataFromApi()).subscribe((res: any) => {
      console.log(res.products);
      (res.products).forEach((ele:any,index:any)=>{
        console.log(ele,index);
        var temp = {
          image:ele.images[0],
          price:ele.price,
          title:ele.title
        }
        console.log(temp);
        this.finalDataArray[index]=temp;
      })
      console.log(this.finalDataArray);
    })
  }
  routeWithData(product:any){
    console.log(product);
    this.router.navigate(['/details'],{state:{data:product}})
  }

}
