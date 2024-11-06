import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  products: any=[];
  isLiked: boolean = false;
  constructor(
    public service: ServiceService
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.isLiked = false
    console.log('hello')
    this.service.getData().subscribe(res => {
      // console.log(res)
      this.products = res;
      
      var likedPost: any = localStorage.getItem('likedItems');
      likedPost = JSON.parse(likedPost);
      this.products.map((element: any, key: any) => {
        if (likedPost.find((x: any) => x.id === element.id)) {
          // console.log('this.products[key]', this.products[key]);
          this.products[key].isLiked = true;
        } else {
          this.products[key].isLiked = false;
        }
      });
    }, err => {
      console.log(err)
    })
  }
  likeBtn(like: any) {
    console.log('Like', like.id);
    var likedArr: any = [];
    likedArr.push(like);
    var storedLikes: any = localStorage.getItem('likedItems');
    storedLikes = JSON.parse(storedLikes);
    if (storedLikes === null) {
      localStorage.setItem('likedItems', JSON.stringify(likedArr));
      // this.isLiked=true;
    }
    else {
      if (storedLikes.find((x: any) => x.id === like.id)) {
        console.log('Before', storedLikes);
        storedLikes.splice(like, 1);
        console.log('After', storedLikes);
        if (storedLikes.length === 0) {
          // this.isLiked=false;
          localStorage.removeItem('likedItems');
        }
        else {
          // this.isLiked=false;
          localStorage.setItem('likedItems', JSON.stringify(storedLikes));
        }
      }
      else {
        likedArr = likedArr.concat(storedLikes);
        localStorage.setItem('likedItems', JSON.stringify(likedArr));
        // this.isLiked=true;
      }
    }
  }
  refreshPage() {
    this.ionViewWillEnter();
  }
}
