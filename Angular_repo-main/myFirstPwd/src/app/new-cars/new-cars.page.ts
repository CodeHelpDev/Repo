import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';
import { register } from 'swiper/element/bundle';


register();

@Component({
  selector: 'app-new-cars',
  templateUrl: './new-cars.page.html',
  styleUrls: ['./new-cars.page.scss'],
})
export class NewCarsPage implements OnInit {
  p:any;
  searchBar: any = 'price';
  arr: any = [];
  isLiked: boolean = false;
  config:any;
  constructor(
    public service: ServiceService
  ) {
    this.p=1;
    this.searchBar = 'price';
    this.config = {
      id: 'basicPaginate',
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: 50
    };
  }
  ionViewWillEnter() {
    this.isLiked = false;
    this.getCarData();
  }

  ngOnInit() {
  }
  getCarData() {
    this.service.getData().subscribe((data: any) => {
      data.find((itemsInData: any, index: any) => {
        var obj = {}
        var id = index;
        obj = {
          id: id,
          title: itemsInData.title,
          image: itemsInData.image,
          class: itemsInData.class,
          start_production: itemsInData.start_production
        }
        this.arr.push(obj);
      })
      console.log('Arr', this.arr);
      //Like ColoR Code 
      var likedCars: any = localStorage.getItem('likedCars');
      likedCars = JSON.parse(likedCars);
      if (likedCars === null) {
        console.log('Empty Like');
      }
      else {
        console.log('likedCars', likedCars);
        this.arr.map((element: any, key: any) => {
          if (likedCars.find((x: any) => x.id === element.id)) {
            this.arr[key].isLiked = true;
          }
          else {
            this.arr[key].isLiked = false;
          }
        });
      }
    })
  }
  price() {
    this.searchBar = 'price';
  }
  brand() {
    this.searchBar = 'brand';
  }
  range() {
    this.searchBar = 'range';
  }
  like(val: any) {
    this.likeColour();
    var likedCarsArr = [];
    likedCarsArr.push(val);
    var storedLikedCars: any = localStorage.getItem('likedCars');
    storedLikedCars = JSON.parse(storedLikedCars);
    if (storedLikedCars === null) {
      localStorage.setItem('likedCars', JSON.stringify(likedCarsArr));
    }
    else {
      if (storedLikedCars.find((x: any) => x.title === val.title)) {
        console.log('storedLikedCars', val.title);
        storedLikedCars.splice(val, 1);
        if (storedLikedCars.length === 0) {
          localStorage.removeItem('likedCars');
        }
        else {
          localStorage.setItem('likedCars', JSON.stringify(storedLikedCars));
        }
      }
      else {
        likedCarsArr = likedCarsArr.concat(storedLikedCars);
        localStorage.setItem('likedCars', JSON.stringify(likedCarsArr));
      }
    }
  }
  likeColour() {
    this.ionViewWillEnter();
  }
  ionInfiniteScroll(ev:any){
    console.log('In ')
  }
  pageChanged(event:any) {
    this.config.currentPage = event;
  }

}
