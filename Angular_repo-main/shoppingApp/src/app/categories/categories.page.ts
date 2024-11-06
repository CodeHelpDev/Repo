import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ServiceService } from '../services/service.service';
import { IonInput } from '@ionic/angular';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {
  segmentValue: any = 'women';
  dataArray: any = [];
  mensCatArray: any = [{title:'Tops'}, {title:'Shirts & Blouses'}, {title:'Cardigans & Sweaters'},
     {title:'Knitwear'}, {title:'Blazers'}, {title:'Outerwear'}, {title:'Pants'},
      {title:'Jeans'}, {title:'Shorts'}, {title:'Skirts'}, {title:'Dresses'}];
  kidsDataArray: any = [];
  isSearchVisible: Boolean = false;
  tempArrayWomen:any=[];
  tempArrayMen:any=[]
  tempArraykids:any=[];

  @ViewChild('input') myInput!: IonInput

  constructor(
    public service: ServiceService
  ) { }

  ngOnInit() {
    this.tempArrayMen = this.mensCatArray.slice();
    this.service.getJeweleryData().subscribe((el: any) => {
      console.log(el);
      setTimeout(() => {
        this.dataArray = el;
        this.tempArrayWomen =this.dataArray;
      }, 1000);
    })
    this.service.getKidsData().subscribe((res: any) => {
      console.log(res);
      setTimeout(() => {
        this.kidsDataArray = res;
        this.tempArraykids = this.kidsDataArray;
      }, 1000);
    })
  }
  onSerach() {
    if (this.isSearchVisible === false) {
      this.isSearchVisible = true;
      setTimeout(() => {
        this.myInput.setFocus();
      }, 50);
    } else {
      this.isSearchVisible = false;
    }
  }
  onInput(event: any) {
    var value: any = event.target.value;
    if (value) {
      this.isSearchVisible = true;
      console.log(event.target.value);
      this.dataArray = this.tempArrayWomen.filter((x:any)=>((x.title).toLowerCase().includes(value.toLowerCase())));
      this.kidsDataArray= this.tempArraykids.filter((x:any)=>((x.title).toLowerCase().includes(value.toLowerCase())));
      this.mensCatArray = this.tempArrayMen.filter((x:any)=>((x.title).toLowerCase().includes(value.toLowerCase())));
    } else {
      this.dataArray = this.tempArrayWomen;
      this.kidsDataArray = this.tempArraykids;
      this.mensCatArray = this.tempArrayMen;
      this.isSearchVisible = false;
    }
    console.log(value)
  }
  segValue(event: any) {
    this.segmentValue = event.target.value;
    console.log('this.segmentValue', this.segmentValue);
  }

}
