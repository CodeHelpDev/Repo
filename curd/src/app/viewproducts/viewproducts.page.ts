import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewproducts',
  templateUrl: './viewproducts.page.html',
  styleUrls: ['./viewproducts.page.scss'],
})
export class ViewproductsPage implements OnInit {
productsData:any=[];
arrforHide:any=[];
  constructor(
    public com: CommonService,
    public router:Router
  ) { }

  async ngOnInit() {
   
  }
  async ionViewWillEnter(){
    var storedProducts: any = await this.com.getProducts();
    storedProducts = JSON.parse(storedProducts);
    if (storedProducts) {
      this.productsData = storedProducts;
      this.arrforHide = storedProducts;
    }
  }
  async deleteProducts(index:any){
    if(this.productsData){
      var value = await this.com.checkAlert('Are you Sure','Do you really want to remove '+this.productsData[index].name);
      if(value===true){
        this.productsData.splice(index,1);
        this.com.setProducts(this.productsData);
      }
    }
  }
  updateProduct(product:any){
    this.router.navigate(['/updateproduct'],{state:{data:product}})
  }
  search(event:any){
    var value:any = event.detail.value;
    if(value){
      this.productsData = this.arrforHide.filter((x:any)=>((x.name).toLowerCase()).includes(value.toLowerCase()));
    }else{
      this.productsData = this.arrforHide;
    }
  }

}
