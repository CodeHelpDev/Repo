import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {
  dataArray: any = [];
  tempArray: any = [];
  arrForDrop:any=[];

  p: any = 1;
  constructor(
    public service: ServiceService
  ) { }

  ngOnInit() {
    var arr:any=[];
    this.service.getOrdersDataFRomApi().subscribe((res: any) => {
      console.log(res.recipes);
      this.dataArray = res.recipes;
      this.tempArray = [...res.recipes];

      const flags = new Set();
        const newPlaces = this.tempArray.filter((ele:any) => {
            if (flags.has(ele.cuisine)) {
                return false;
            }
            flags.add(ele.cuisine);
            return flags;
        });
        this.arrForDrop=newPlaces;
        console.log(newPlaces)
    })
  }
  searching(event: any) {
    var value: any = event.detail.value;
    if (value) {
      this.dataArray = this.tempArray.filter((x:any)=>((x.cuisine).toLowerCase()).includes(value.toLowerCase()));
    }else{
      this.dataArray = this.tempArray;
    }
    console.log(value)
  }

}
