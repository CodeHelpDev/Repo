import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService implements OnInit {
tabValue:any;
  constructor(
    public router:Router,
    public http:HttpClient
  ) { }
  
  ngOnInit() {
    this.setNavValue();
  }
  setNavValue(){
    var temp:any = this.router.url;
    var temp2 = temp.split('/');
    this.tabValue = temp2[1];
    console.log('service',this.tabValue)
    return this.router.url;
  }
  getProductsFromApi(){
    return this.http.get('https://fakestoreapi.com/products').pipe(map((res:any)=>{
      return res;
    }))
  }
  getProductsFromApiForMen(){
    return this.http.get("https://dummyjson.com/products").pipe(map((res:any)=>{
      return res;
    }))
  }
  getProductsFromApiForKids(){
    return this.http.get("https://raw.githubusercontent.com/xfiveco/mock-api-images/main/images.json").pipe(map((res:any)=>{
      return res;
    }))
  }
  getProductsFromApiForKidsDesc(){
    return this.http.get("https://jsonplaceholder.typicode.com/comments").pipe(map((res:any)=>{
      return res;
    }))
  }
}
