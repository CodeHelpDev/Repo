import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-reels',
  templateUrl: './reels.page.html',
  styleUrls: ['./reels.page.scss'],
})
export class ReelsPage implements OnInit {
  reels: any;
  arr: any = [];
  isLiked: boolean = false;
  constructor(
    public service: ServiceService
  ) { }

  ngOnInit() {
  }
  ionViewWillEnter() {
    this.isLiked = false;
    // Code For Get data From API
    this.service.getData().subscribe((res) => {

      this.arr = res;
      console.log('this.arr', this.arr);

      var storedLikedReels: any = localStorage.getItem('likedReel');
      storedLikedReels = JSON.parse(storedLikedReels);
      this.arr.map((element: any, key: any) => {
        if (storedLikedReels.find((x: any) => parseInt(x.id) === parseInt(element?.id))) {
          this.arr[key].isLiked = true;
        } else {
          this.arr[key].isLiked = false;
        }
      })
      console.log(storedLikedReels, this.arr)
    })
  }

  getReels() {

  }
  reelLike(likeReel: any) {
    var arr = [];
    arr.push(likeReel);
    console.log('likeReel', likeReel);
    var likedReels: any = localStorage.getItem('likedReel');
    likedReels = JSON.parse(likedReels)

    if (likedReels === null) {
      localStorage.setItem('likedReel', JSON.stringify([likeReel]));
      this.isLiked = true;
    }
    else {
      if (likedReels.find((x: any) => x.id === likeReel.id)) {
        console.log('Before ', likedReels);
        likedReels.splice(likeReel, 1);
        console.log('After ', likedReels);
        if (likedReels.length === 0) {
          localStorage.removeItem('likedReel');
          this.isLiked = false;
        }
        else {
          localStorage.setItem('likedReel', JSON.stringify(likedReels));
          this.isLiked = true;
        }
      }
      else {
        arr = arr.concat(likedReels);
        localStorage.setItem('likedReel', JSON.stringify(arr));
        this.isLiked = true;
      }

    }

    // console.log('LikedReels', JSON.parse(likedReels));

  }

  refreshPage() {
    this.ionViewWillEnter();
  }
}

