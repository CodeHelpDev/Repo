import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Preferences } from '@capacitor/preferences';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.page.html',
  styleUrls: ['./favorite.page.scss'],
})
export class FavoritePage implements OnInit {
  likesDataArray: any = [];
  constructor(
    public router:Router
  ) { }

  async ngOnInit() {
    var storedLikes: any = await this.getLikesData();
    storedLikes = JSON.parse(storedLikes);
    if (storedLikes) {
      this.likesDataArray = storedLikes;
    }
  }
  detailsOpen(val:any){
    this.router.navigate(['/details'],{state:{val:val}})
  }


  async getLikesData() {
    var data = await Preferences.get({
      key: 'likes'
    })
    return data.value;
  }

}
