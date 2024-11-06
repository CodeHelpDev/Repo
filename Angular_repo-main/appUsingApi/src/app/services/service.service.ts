import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { map } from 'rxjs/operators';

const apiUrl='https://fakestoreapi.com/';

@Injectable({
  providedIn: 'root'
})

export class ServiceService {
  constructor(private http: HttpClient) { }

  signUpNewUser(endpoint:any,data: any) {
    return this.http.post(apiUrl+endpoint, data)
    .pipe(map(result => result));
  }
  logInUser(endpoint:any,data:any){
    return this.http.post(apiUrl+endpoint, data)
    .pipe(map(result => result));
  }
  getAllProducts(){
    return this.http.get("https://fakestoreapi.com/products").pipe(map(result=>result));
  }
}
