import { Component, OnInit } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import { get } from '@ionic-native/core/decorators/common';
import { iif } from 'rxjs';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.page.html',
  styleUrls: ['./favourite.page.scss'],
})
export class FavouritePage implements OnInit {
  likedProducts: any = [];
  constructor() { }

  async ngOnInit() {
    var storedLikes: any = await this.getLikes();
    storedLikes = JSON.parse(storedLikes);
    if (storedLikes) {
      this.likedProducts = storedLikes;
      console.log(this.likedProducts)
    }else{
      this.likedProducts=[];
    }
  }
  async onLiked(like:any){
    var storedLiked:any = await this.getLikes();
    storedLiked = JSON.parse(storedLiked);
    if(storedLiked){
      var liked: any = storedLiked.find((x:any)=>{
        if(x.id===like.id){
          return x;
        }
      })
      if(liked){
        var index:any = storedLiked.findIndex((x:any)=>x.id===liked.id);
        storedLiked.splice(index,1);
        if(storedLiked.length===0){
          this.removeLikeKey();
        }else{  
          this.setLikes(storedLiked);
        }
      }else{
        storedLiked = storedLiked.concat(like);
        this.setLikes(storedLiked);
      }
    }else{
      this.setLikes([like]);
    }
    this.ngOnInit();

  }


  async removeLikeKey(){
    await Preferences.remove({
      key:'likes'
    })
  }
  async getLikes() {
    var data: any = await Preferences.get({
      key: 'likes'
    })
    return data.value;
  }
  async setLikes(data: any) {
    await Preferences.set({
      key: 'likes',
      value: JSON.stringify(data)
    })
  }
}
