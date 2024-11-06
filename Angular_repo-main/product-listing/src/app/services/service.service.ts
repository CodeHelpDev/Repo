import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ServiceService {
  url = 'https://api.asindataapi.com/request?api_key=demo&type=search&amazon_domain=amazon.com&search_term=highlighter+pens';

  constructor(
    private http: HttpClient
  ) {

  }

  getdata(search: any = null) {
    //return this.http.get('https://api.asindataapi.com/request?api_key=demo&type=search&amazon_domain=amazon.com&search_term='+search).pipe(map(data=>{
    return this.http.get(this.url).pipe(map(data => {
      return data;
    }))
  }
}
