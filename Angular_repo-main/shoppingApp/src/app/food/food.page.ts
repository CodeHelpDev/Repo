import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-food',
  templateUrl: './food.page.html',
  styleUrls: ['./food.page.scss'],
})
export class FoodPage implements OnInit {
finalDataArray:any=[];
  constructor(
    public router:Router,
    public service:ServiceService
  ) { }

  async ngOnInit() {
    (await this.service.detailsPageApiData()).subscribe((res:any)=>{
      console.log(res.recipes);
      (res.recipes).forEach((element:any,index:any) => {
        var temp={
          image:element.image,
          title:element.name,
          description:element.instructions[0],
          price:element.caloriesPerServing
        }      
        this.finalDataArray[index]= temp;
      });
      console.log('this.finalDataArray',this.finalDataArray);
    })

  }
  routeWithData(data:any){
    console.log(data)
    this.router.navigate(['/details'],{state:{data:data}})
  }

}
