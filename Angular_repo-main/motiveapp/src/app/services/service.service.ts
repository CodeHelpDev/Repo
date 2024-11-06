import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  currentUser: any;
  constructor(
    public http: HttpClient
  ) {
    this.setUserVariable();
  }

  async setUserVariable() {
    var user: any = await this.getUser()
    user = JSON.parse(user);
    if (user) {
      this.currentUser = user[0]?.email;
      console.log('this.currentUser', this.currentUser);
    }
  }
  getDataFromApi() {
    return this.http.get("https://testapi.devtoolsdaily.com/countries").pipe(map((res: any) => {
      return res;
    }))
  }
  getChartsDataFromApi() {
    return this.http.get("https://raw.githubusercontent.com/stivenson/students-api/refs/heads/master/students.json");
  }

  async getCurrentUser() {
    var user: any = await this.getUser();
    user = JSON.parse(user);
    return user;
  }
  async getUser() {
    var data = await Preferences.get({
      key: 'currentUser'
    })
    return data.value
  }
}
