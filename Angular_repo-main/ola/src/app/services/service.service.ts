import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  url:any='https://gist.githubusercontent.com/devhammed/78cfbee0c36dfdaa4fce7e79c0d39208/raw/07df5ed443941c504c65e81c83e6313473409d4c/countries.json';

  constructor(
    public http: HttpClient
  ) { }
  
  getCountryData(){
    return this.http.get(this.url).pipe(map(res=>{
      return res;
    }))
  }
}
