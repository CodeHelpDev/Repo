import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(
    public http: HttpClient
  ) { }

  getDataFromApi() {
    return this.http.get('https://dummyjson.com/products');
  }
  getJeweleryData(){
    return this.http.get('https://fakestoreapi.com/products/category/jewelery');
  }
  getKidsData(){
    return this.http.get("https://fakestoreapiserver.reactbd.com/amazonproducts");
  }
}
