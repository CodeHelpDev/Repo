import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(
    public http:HttpClient
  ) {
  }

  getDataFromApi(){
    return this.http.get('https://dummyjson.com/recipes')
  }
  getUsersDataFromApi(){
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
  getOrdersDataFRomApi(){
    return this.http.get('https://dummyjson.com/recipes');
  }
}

