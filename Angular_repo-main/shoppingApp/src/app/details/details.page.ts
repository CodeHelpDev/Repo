import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Preferences } from '@capacitor/preferences';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  productData: any = [];
  tempData: any;
  cart: any;
  cartData: any;

  constructor(
    public router: Router
  ) { }

  async ngOnInit() {
    var temp1: any = this.router.getCurrentNavigation()?.extras.state;
    this.tempData = temp1.data;
    this.filterData(this.tempData);

  }
  async filterData(data: any) {
    var storedLikes: any = await this.getLikes();
    storedLikes = JSON.parse(storedLikes);
    var storedCart: any = await this.getCartData();
    storedCart = JSON.parse(storedCart);
    if(storedCart && storedLikes) {
      var addedToCart = storedCart.find((x: any) => {
        if (storedLikes) {
          storedLikes.find((ele: any, i: any) => {
            if (ele.id === data.id) {
              data.isLiked = true;
            }
            if (ele.id !== data.id) {
              data.isLiked = false;
            }
            if (x.id === data.id) {
              data.isAddedToCart = true;
            }
            if (x.id !== data.id) {
              data.isAddedToCart = false;
            }
            this.productData[i] = data;
          })
        } else {
          if (x.id === data.id) {
            data.isAddedToCart = true;
          }
        }
      })
    }else if (storedCart) {
      storedCart.find((x: any, i: any) => {
        if (x.id === data.id) {
          data.isLiked= false;
          data.isAddedToCart = true;
        }else{
          data.isLiked= false;
          data.isAddedToCart = false;
        }
        this.productData[i] = data;
      })
    }else if (storedLikes) {
      storedLikes.find((x: any, ind: any) => {
        if (x.id === data.id) {
          data.isAddedToCart =false;
          data.isLiked = true;
        }
        if (x.id !== data.id) {
          data.isLiked = false;
        }
        this.productData[ind] = data;
      })
    }else{
      data.isLiked = false;
      data.isAddedToCart = false;
      this.productData[0]=data;

    }

  }

  async addToCart(prod: any) {
    var storedCart: any = await this.getCartData();
    storedCart = JSON.parse(storedCart);
    if (storedCart) {
      var stored: any = storedCart.find((x: any) => {
        if (x.id === prod.id) {
          return x;
        }
      })
      if (stored) {
        var index: any = storedCart.findIndex((x: any) => x.id === prod.id);
        storedCart.splice(index, 1);
        if (storedCart.length === 0) {
          this.removeCartKey();
        } else {
          this.setCartData(storedCart);
        }
      } else {
        storedCart = storedCart.concat(prod);
        this.setCartData(storedCart);
      }
    } else {
      this.setCartData([prod]);
    }
    this.filterData(prod);
  }



  async onLikedClick(like: any) {
    var storedLikes: any = await this.getLikes();
    storedLikes = JSON.parse(storedLikes);
    if (storedLikes) {
      var liked: any = storedLikes.find((x: any) => {
        if (x.id === like.id) {
          return x;
        }
      })
      if (liked) {
        var index = storedLikes.findIndex((x: any) => x.id === liked.id);
        storedLikes.splice(index, 1);
        if (storedLikes.length === 0) {
          this.removeLikedKey();
        } else {
          this.setLikes(storedLikes);
        }
      } else {
        storedLikes = storedLikes.concat(like);
        this.setLikes(storedLikes);
      }
    } else {
      this.setLikes([like]);
    }
    this.filterData(like);
  }
  async setLikes(data: any) {
    await Preferences.set({
      key: 'likes',
      value: JSON.stringify(data)
    })
  }
  async getLikes() {
    var data: any = await Preferences.get({
      key: 'likes'
    })
    return data.value;
  }
  async removeLikedKey() {
    await Preferences.remove({
      key: 'likes'
    })
  }
  async setCartData(data: any) {
    await Preferences.set({
      key: 'cartData',
      value: JSON.stringify(data)
    })
  }
  async getCartData() {
    var data: any = await Preferences.get({
      key: 'cartData'
    })
    return data.value;
  }
  async removeCartKey() {
    await Preferences.remove({
      key: 'cartData'
    })
  }
}
