import { Component, ElementRef, HostListener, Input, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Preferences } from '@capacitor/preferences';
import { HighlightPipe } from '../highlight.pipe';
import { IonInput } from '@ionic/angular';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  tempArry: any;
  productDetails: any = {};
  favArray: any;
  isSearchbarVisible: boolean = false;
  old: any;
  searchText:any;
  element:any;
  clone:any;
  @ViewChild('input') input!: IonInput

  constructor(
    public router: Router
  ) { }

  ngOnInit() {
    var data: any = this.router.getCurrentNavigation()?.extras.state;
    if (data?.data) {
      this.tempArry = data?.data;
      if (this.tempArry) {
        this.filterRed();
      }
    }

    if (data?.val) {
      this.favArray = data?.val;
      this.filterRedDataByFavorite();
    }
    this.element = document.getElementById('content');
  }
  async filterRedDataByFavorite() {
    var storedLikes: any = await this.getLikeData();
    storedLikes = JSON.parse(storedLikes);
    if (storedLikes) {
      storedLikes.find((x: any, index: any) => {
        if (this.favArray.id === x.id) {
          this.favArray.isLiked = true;
        }
      })
      this.productDetails = this.favArray;
    }
  }
  ionViewWillEnter() {
    this.old = document.getElementById('content');
    this.clone = this.old.cloneNode(true)
    console.log('old',this.old)
  }
  async filterRed() {
    var storedLikes: any = await this.getLikeData();
    storedLikes = JSON.parse(storedLikes);
    if (storedLikes && this.tempArry) {
      storedLikes.forEach((element: any, index: any) => {
        if (element.id === this.tempArry.id) {
          this.tempArry.isLiked = true;
        } else {
          this.tempArry.isLiked = false;
        }
        this.productDetails = this.tempArry
      })
    }
    if (storedLikes && this.favArray) {
      storedLikes.forEach((element: any, index: any) => {
        if (element.id === this.favArray.id) {
          this.favArray.isLiked = true;
        } else {
          this.favArray.isLiked = false;
        }
        this.productDetails = this.favArray;
      })
    }

  }
  searchClicked() {
    this.isSearchbarVisible = true;
    setTimeout(() => {
      this.input.setFocus();
    }, 300);
  }
  onSearchChange(event: any) {
    let el: any = document.getElementById('content');
    var search = event.detail.value;
    if (search === "" || search === null) {
      var html :any = document.getElementById("content")
      while (html.hasChildNodes()) {
        html.removeChild(html.firstChild);
      }
      html.appendChild(this.clone);
      this.isSearchbarVisible = false;
      setTimeout(() => {
        this.ngOnInit();
      }, 100);
    } else {      
      el.innerHTML = el.innerText
        .replace(new RegExp(event.detail.value , 'gi'),
          '<mark>$&</mark>'
        );
      }
    }

  async like(product: any) {
    var storedLikes: any = await this.getLikeData();
    storedLikes = JSON.parse(storedLikes);
    if (storedLikes) {
      var liked = storedLikes.find((x: any) => {
        if (x.id === product.id) {
          return x;
        }
      })
      if (liked) {
        var index = storedLikes.findIndex((x: any) => x.id === liked.id);
        storedLikes.splice(index, 1);
        if (storedLikes.length === 0) {
          this.removeLikeKey();
        } else {
          this.setLikeData(storedLikes);
        }
      } else {
        storedLikes = storedLikes.concat(product);
        this.setLikeData(storedLikes);
      }
    } else {
      this.setLikeData([product]);
    }
    this.filterRed();
  }
  async getLikeData() {
    var data = await Preferences.get({
      key: 'likes'
    })
    return data.value;
  }
  async setLikeData(data: any) {
    await Preferences.set({
      key: 'likes',
      value: JSON.stringify(data)
    })
  }
  async removeLikeKey() {
    await Preferences.remove({
      key: 'likes'
    })
  }

}

