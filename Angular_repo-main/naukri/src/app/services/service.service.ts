import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
url:any="https://jobdataapi.com/api/jobs/";
  constructor(
    public http : HttpClient
  ) { }
  getApiData(){
    return this.http.get(this.url).pipe((data:any) => {
      return data;
    
   })

  }
}
