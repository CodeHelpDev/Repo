import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(
    public http: HttpClient
  ) { }

  getData(){
    return this.http.get("https://raw.githubusercontent.com/itemsapi/itemsapi-example-data/master/items/cars.json").pipe(map(data=>{
      return (data);
    }))
  }
}
