import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ServiceService {
  constructor(private http: HttpClient) { }

  getData(){
    return this.http.get("https://gist.githubusercontent.com/poudyalanil/ca84582cbeb4fc123a13290a586da925/raw/14a27bd0bcd0cd323b35ad79cf3b493dddf6216b/videos.json").pipe(map(result=>result));
  }
  getUsersData(){
    return this.http.get("https://dummyjson.com/users").pipe(map(res=>res));
  }
}


