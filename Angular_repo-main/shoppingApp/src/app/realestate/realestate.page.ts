import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';
import { Preferences } from '@capacitor/preferences';

@Component({
  selector: 'app-realestate',
  templateUrl: './realestate.page.html',
  styleUrls: ['./realestate.page.scss'],
})

export class RealestatePage implements OnInit {
  finalData: any = [];

  constructor(
    public service: ServiceService
  ) { }

  async ngOnInit() {
    this.service.getRealEstateDataFromApi().subscribe(async (res: any) => {
      var data: any = await this.checkLiked();
      res.forEach((element: any, index: any) => {
        data.find((x: any) => {
          if (x.id === element.id) {
            res[index].isLiked = true;
          }
          this.finalData = res;
        })
      });
    })



  }
  async like(value: any) {    
    var storedLikes: any = await this.getLikesData();
    storedLikes = JSON.parse(storedLikes);
    if (storedLikes) {
      var stored: any = storedLikes.find((x: any) => {
        if (x.id === value.id) {
          return x
        }
      })
      if (stored) {
        var index = storedLikes.findIndex((x: any) => x.id == stored.id)
        storedLikes.splice(index, 1);
        if (storedLikes.length === 0) {
          this.removeLikeKey();
        } else {
          this.setLikesData(storedLikes);
        }
      } else {
        storedLikes = storedLikes.concat(value);
        this.setLikesData(storedLikes);
      }
    } else {
      this.setLikesData([value]);
    }
    this.ngOnInit();
  }
  async checkLiked() {
    var storedLikes: any = await this.getLikesData();
    storedLikes = JSON.parse(storedLikes);
    return storedLikes;
  }

  async getLikesData() {
    var data = await Preferences.get({
      key: 'likedProducts'
    })
    return data.value;
  }
  async setLikesData(data: any) {
    await Preferences.set({
      key: 'likedProducts',
      value: JSON.stringify(data)
    })
  }
  async removeLikeKey() {
    await Preferences.remove({
      key: 'likedProducts'
    })
  }
}
