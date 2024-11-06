import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  isLiked: boolean = true;
  likedArr: any = []
  itemInArr: any
  constructor(
    public route : ActivatedRoute
  ) { }

  ionViewWillEnter() {
    this.likedArr = localStorage.getItem('likedProducts');
    this.likedArr = JSON.parse(this.likedArr);
   
  }
  removeLike(e: any,index:any) {
    var likedItems: any = localStorage.getItem('likedProducts');
    likedItems = JSON.parse(likedItems);
   
      if (likedItems.find((x: any) => x.position === e.position)) {
        console.log('if', e.position);
        console.log('before Splice', likedItems);
        likedItems.splice(e, 1);
        console.log('after Splice', likedItems);
        if(likedItems.length===0){
          localStorage.removeItem('likedProducts');
        }
        else{
          localStorage.setItem('likedProducts', JSON.stringify(likedItems));
        }
        this.likedArr.splice(index,1)
      }   
  }
} 