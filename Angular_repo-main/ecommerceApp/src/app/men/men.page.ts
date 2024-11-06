import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';
import { Preferences } from '@capacitor/preferences';
import { Router } from '@angular/router';

@Component({
  selector: 'app-men',
  templateUrl: './men.page.html',
  styleUrls: ['./men.page.scss'],
})
export class MenPage implements OnInit {
  isLoadingVisible:boolean=false;
  dataArray:any=[]
  finalArray:any=[]
  constructor(
    public service:ServiceService,
    public router:Router
  ) { }
  async ngOnInit() {
    var tempObj:any={};
    this.isLoadingVisible = true;
    this.service.getProductsFromApiForMen().subscribe(async (res: any) => {
      (res.products).forEach((element:any,index:any) => {
        tempObj = {
          image:element.images[0],
          price:element.price,
          title:element.title,
          description:element.description,
          id:element.id
        }      
        this.dataArray[index] = tempObj;
      });
      console.log('this.dataArray',this.dataArray);
      
      var likedProd: any = await this.getLikedProducts();
      var storedCart: any = await this.getCart();
      storedCart = JSON.parse(storedCart);
      likedProd = JSON.parse(likedProd);
      if (this.dataArray) {
        this.dataArray.forEach((element: any, index: any) => {
          likedProd?.find((ele: any, i: any) => {
            storedCart.find((e: any, ind: any) => {
              if (element.id === e.id) {
                element.isAddedToCart = true;
              }
            })
            if (ele.id === element.id) {
              element.isLiked = true;
            }
          })
          this.finalArray[index] = element;
        });
      }
    })
  }
  async addtoCart(prod: any) {
    var storedCart: any = await this.getCart();
    storedCart = JSON.parse(storedCart);
    if (storedCart) {
      var storedItem: any = storedCart.find((x: any) => {
        if (x.id === prod.id) {
          return x;
        }
      })
      if (storedItem) {
        var index = storedCart.findIndex((x: any) => x.id === storedItem.id);
        storedCart.splice(index, 1);
        if (storedCart.length === 0) {
          this.removeCartKey();
        } else {
          this.setCart(storedCart);
        }
      } else {
        storedCart = storedCart.concat(prod);
        this.setCart(storedCart);
      }
    }
    else {
      this.setCart([prod]);
    }
    this.ngOnInit();

  }
  routeToDetails(prod:any){
    this.router.navigate(['/details'],{state:{data:prod}})
  }
  async like(product: any) {
    var likedProducts: any = await this.getLikedProducts();
    likedProducts = JSON.parse(likedProducts);
    if (likedProducts) {
      var liked: any = likedProducts.find((x: any) => {
        if (x.id === product.id) {
          return x;
        }
      })
      if (liked) {
        var index = likedProducts.findIndex((x: any) => x.id === liked.id);
        likedProducts.splice(index, 1);
        if (likedProducts.length === 0) {
          this.removeLikedKey();
        } else {
          this.setLikedProducts(likedProducts);
        }
      } else {
        likedProducts.push(product);
        this.setLikedProducts(likedProducts)
      }
    } else {
      this.setLikedProducts([product]);
    }
    this.ngOnInit();
  }
  async setLikedProducts(data: any) {
    await Preferences.set({
      key: 'likes',
      value: JSON.stringify(data)
    })
  }
  async getLikedProducts() {
    var data = await Preferences.get({
      key: 'likes'
    })
    return data.value;
  }
  async removeLikedKey() {
    await Preferences.remove({
      key: 'likes'
    })
  }
  async setCart(data: any) {
    await Preferences.set({
      key: 'cartData',
      value: JSON.stringify(data)
    })
  }
  async getCart() {
    var data = await Preferences.get({
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
