import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.page.html',
  styleUrls: ['./likes.page.scss'],
})
export class LikesPage implements OnInit {
  posts:any;
  constructor() { }

  ngOnInit() {
    
  }
  ionViewWillEnter(){
    this.getStoredLikes();
  }
  removeLiked(item:any){
    console.log('item',item);
    var storedLikes :any= localStorage.getItem('likedItems');
    storedLikes = JSON.parse(storedLikes);
    console.log('Before',storedLikes);
    
    storedLikes.splice(item,1);
    localStorage.setItem('likedItems',JSON.stringify(storedLikes));
    console.log('After',storedLikes);
    this.getStoredLikes();  
  }
  getStoredLikes(){
    var likedPost :any= localStorage.getItem('likedItems');
    likedPost= JSON.parse(likedPost);
    this.posts=likedPost;
    console.log(likedPost);
  }

}
