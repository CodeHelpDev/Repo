import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { elementAt } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  car: any;
  storedInCart: any;
  isLiked: boolean = false;
  vcar: any;
  like: boolean = true;
  temp: any;
  constructor(
    public route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.like == true;

    this.route.queryParams.subscribe((res: any) => {
      console.log(res);
      this.car = res;
    })
    console.log(this.like);
    this.checkButtons();
  }

  ionViewWillEnter() {
    //   this.temp= localStorage.getItem('likedCars');
    //   if(this.temp){
    //     this.temp=JSON.parse(this.temp);
    //   }
  }

  addToCart(car: any) {
    console.log(car.id);
    var arr = [];
    arr.push(car);
    var storedCartItems: any = localStorage.getItem('cart');
    if (storedCartItems === null) {
      localStorage.setItem('cart', JSON.stringify(arr));
      this.ngOnInit();
    }
    else {
      storedCartItems = JSON.parse(storedCartItems);
      if (storedCartItems.find((x: any) => x.id === car.id)) {
        storedCartItems.splice(car, 1);
        if (storedCartItems.length === 0) {
          localStorage.removeItem('cart');
          this.ngOnInit();
        }
        else {
          localStorage.setItem('cart', JSON.stringify(storedCartItems));
          this.ngOnInit();
        }
      }
      else {
        arr = arr.concat(storedCartItems);
        localStorage.setItem('cart', JSON.stringify(arr));
        this.ngOnInit();
      }
    }
  }
  //For Checking The Car is stored in Cart Or Not 
  checkButtons() {
    var storedCart: any = localStorage.getItem('cart');
    storedCart = JSON.parse(storedCart);
    if (storedCart === null) {

    }
    else {
      if (storedCart.find((x: any) => x.id === this.car.id)) {
        this.storedInCart = this.car.id
        console.log('Alreday Liked', this.storedInCart);
      }
      else {
      }

    }
  }

  unLikeBtn(likedCar: any) {
    console.log(this.temp);
    console.log(this.car)
    if (this.temp.find((x: any) => x.id === parseInt(this.car?.id))) {
      console.log('Already Liked');
    } else {
      console.log('Not Liked');
    }
  }
}
