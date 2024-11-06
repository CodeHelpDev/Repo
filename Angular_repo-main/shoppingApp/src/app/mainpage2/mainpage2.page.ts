import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';
import { Preferences } from '@capacitor/preferences';
import { Router } from '@angular/router';


@Component({
  selector: 'app-mainpage2',
  templateUrl: './mainpage2.page.html',
  styleUrls: ['./mainpage2.page.scss'],
})
export class Mainpage2Page implements OnInit {
  products: any = [];
  constructor(
    public router:Router,
    public service: ServiceService
  ) { 
    console.log(this.products.length)
  }

  async ngOnInit() {
    var data:any = await this.getLikes();
    data = JSON.parse(data);
      
    this.service.getDataFromApi().subscribe((res: any) => {
      // this.products = res?.products;
      if(res.products){
        (res.products)?.forEach((element:any,index:any) => {
         if(data){
          data.find((x:any,i:any)=>{
            if(x.id==element.id){
              element.isLiked = true;
            }
          })  
          this.products[index]=element;
        }else{
          this.products=res.products;
        }        
      });
      }
    })
  }
  routeToDetails(val:any){
    this.router.navigate(['/details'],{state:{data:val}});

  }

  async onLike(val:any){
    var storedLikes:any = await this.getLikes();
    storedLikes = JSON.parse(storedLikes);
    if(storedLikes){
      var valid:any =  storedLikes.find((x:any)=>{
        if(x.id===val.id){
          return x
        }
      })
      if(valid){
        var index:any = storedLikes.findIndex((x:any)=>x.id===valid.id);
        console.log(index)
        storedLikes.splice(index,1);
        if(storedLikes.length===0){
          this.removeLikesKey();
        }else{
          this.setLikes(storedLikes);
        }
      }else{
        storedLikes= storedLikes.concat(val);
        this.setLikes(storedLikes)
      }
    }else{
      this.setLikes([val]);
    }
    this.ngOnInit();
}
  async setLikes(data:any){
    await Preferences.set({
      key:'likes',
      value:JSON.stringify(data)
    })
  }
  async getLikes(){
    var data :any = await Preferences.get({
      key:'likes'
    })
    return data.value;
  }
  async removeLikesKey(){
    await Preferences.remove({
      key:'likes'
    })
  }

}
