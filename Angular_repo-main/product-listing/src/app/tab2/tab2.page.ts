import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  item: any;
  like: any = false;
  isLiked: boolean = false;
  quantity: number = 1;
  isAddedToCart:boolean=false;
  constructor(
    public route: ActivatedRoute
  ) {
    this.route.queryParams.subscribe((res: any) => {
        this.item = res;
    })
    
  }
  ngOnInit() {
  }

  ionViewWillEnter() {
    this.isAddedToCart= false;
    console.log('rdtfyguih',this.isAddedToCart);
    this.quantity = 1;
    if (localStorage.getItem('likedProducts') !== null) {
      var storedLikedProducts: any = localStorage.getItem('likedProducts');
      storedLikedProducts = JSON.parse(storedLikedProducts);
      if (storedLikedProducts.find((x: any) => x.position === this.item?.position) !== undefined) {
        this.isLiked = true;
      } else {
        this.isLiked = false;
      }
    }
    console.log(storedLikedProducts);
    if(storedLikedProducts){
      if(storedLikedProducts.find((x:any)=>x.position===this.item.position)){
        this.isAddedToCart=true;
      }
      // if(storedLikedProducts.length===0){
      //   this.isAddedToCart=false; 
      // }
      else{
        this.isAddedToCart=false;
      }
    }else[
      this.isLiked=false
    ]
    


  }

  addToCart() {
    var cartArr = [];
    console.log('this.item',this.item,'this.quantity',this.quantity)

    let obj = {
      position: this.item.position,
      asin:this.item.asin,
      unit: this.quantity,
      image:this.item.image,
      title:this.item.title,
      unit_price:this.item.unit_price,
      ratings_total:this.item.ratings_total,
      rating:this.item.rating,
      price:this.item.price,
      prices:this.item.prices
  };
  cartArr.push(obj)
  
  console.log('this.item',cartArr)
    // cartArr.push(this.item);
    // cartArr.push(this.quantity);
    // console.log('cartArr',cartArr);
    var storedCartData: any = localStorage.getItem('cartItem');
    storedCartData = JSON.parse(storedCartData);

    if (storedCartData == null) {
      localStorage.setItem('cartItem', JSON.stringify(cartArr));
      this.isAddedToCart=true;
    }
    else {
      if (storedCartData.find((x: any) => x.position === this.item.position)) {
          console.log('Item already added');
        }
        else {
          cartArr = cartArr.concat(storedCartData);
          localStorage.setItem('cartItem', JSON.stringify(cartArr));
          this.isAddedToCart=true;
      }
    }

  }
  likeBtn() {
   
      console.log(this.item,'else')

      var storedLikedProducts: any = localStorage.getItem('likedProducts');
      if (storedLikedProducts === null) {
        var likedProducts: any = [];
        likedProducts.push(this.item);
        this.isLiked = true;
        localStorage.setItem('likedProducts', JSON.stringify(likedProducts))
      } else {
        storedLikedProducts = JSON.parse(storedLikedProducts);
        var i = storedLikedProducts.findIndex((x: any) => x.position === this.item?.position);
        console.log(i)
        if (i > -1) {
          this.isLiked = false;
          storedLikedProducts.splice(i, 1)
          if (storedLikedProducts.length === 0) {
            localStorage.removeItem('likedProducts')
          } else {
            localStorage.setItem('likedProducts', JSON.stringify(storedLikedProducts))
          }
        } else {
          this.isLiked = true;
          storedLikedProducts.push(this.item)
          console.log(storedLikedProducts)
          localStorage.setItem('likedProducts', JSON.stringify(storedLikedProducts))
        }
      }
    }

  plus() {
    this.quantity++;
  }
  min() {
    if (this.quantity > 1) {
      this.quantity--;
    }
    else {

    }

  }
}
