import { Injectable } from '@angular/core';
import { Dialog } from '@capacitor/dialog';
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }
  async getCurrentUser() {
    var data: any = await Preferences.get({
      key: 'currentUser'
    })
    return data.value
  }
  async setCurrentUser(data: any) {
    await Preferences.set({
      key: 'currentUser',
      value: JSON.stringify(data)
    })
  }
  async getUsers() {
    var data: any = await Preferences.get({
      key: 'users'
    })
    return data.value
  }
  async setUsers(data: any) {
    await Preferences.set({
      key: 'users',
      value: JSON.stringify(data)
    })
  }
  async setProducts(data: any) {
    await Preferences.set({
      key: 'products',
      value: JSON.stringify(data)
    })
  }
  async getProducts() {
    var data: any = await Preferences.get({
      key: 'products'
    })
    return data.value
  }
  async checkAlert(title:any,msg:any){
    var data :any = await Dialog.confirm({
      title:title,
      message:msg
    })
    return data.value
  }
}
