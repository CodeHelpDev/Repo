import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import { Dialog } from '@capacitor/dialog';
import { HeaderComponent } from '../header/header.component';


@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(
  ) { }

  async setProductsData(data: any) {
    await Preferences.set({
      key: 'productsData',
      value: JSON.stringify(data)
    })
  }
  async getProductsData() {
    var data: any = await Preferences.get({
      key: 'productsData'
    })
    return data.value
  }
  async checkConfirm(title: any, message: any) {
    var value: any = await Dialog.confirm({
      title: title,
      message: message
    })
    return value;
  }
  async setCategory(data: any) {
    await Preferences.set({
      key: 'category',
      value: JSON.stringify(data)
    })
  }
  async getCategory() {
    var data: any = await Preferences.get({
      key: 'category'
    })
    return data.value;
  }
  async setSubCategory(data: any) {
    await Preferences.set({
      key: 'sub-category',
      value: JSON.stringify(data)
    })
  }
  async getSubCategory() {
    var data: any = await Preferences.get({
      key: 'sub-category',
    })
    return data.value;
  }
  async setBannerData(data: any) {
    await Preferences.set({
      key: 'bannerData',
      value: JSON.stringify(data)
    })
  }
  async getBannerData() {
    var data: any = await Preferences.get({
      key: 'bannerData'
    })
    return data.value
  }
  async setDeals(data: any) {
    await Preferences.set({
      key: 'deals',
      value: JSON.stringify(data)
    })
  }
  async getDeals() {
    var data: any = await Preferences.get({
      key: 'deals'
    })
    return data.value
  }
  async showAlert(title: any, message: any) {
    await Dialog.alert({
      title: title,
      message: message
    })
  }
  async setCoupan(data: any) {
    await Preferences.set({
      key: 'coupans',
      value: JSON.stringify(data)
    })
  }
  async getCoupan() {
    var data = await Preferences.get({
      key: 'coupans'
    })
    return data.value;
  }
  async getUserData() {
    var data: any = await Preferences.get({
      key: 'usersData'
    })
    return data.value;
  }
  async setUserData(data: any) {
    await Preferences.set({
      key: 'usersData',
      value: JSON.stringify(data)
    })
  }
  async getNotifications() {
    var data: any = await Preferences.get({
      key: 'notifications'
    })
    return data.value;
  }
  async setNotifications(data: any) {
    Preferences.set({
      key: 'notifications',
      value: JSON.stringify(data)
    })
  }
  async setMessage(data:any){
    await Preferences.set({
      key:'chat',
      value:JSON.stringify(data)
    })
  }
  async getMessage(){
    var data:any = await Preferences.get({
      key:'chat'
    })
    return data.value
  }
  async setAdmins(data:any){
    await Preferences.set({
      key:'admin',
      value:JSON.stringify(data)
    })
  }
  async getAdmins(){
    var data:any = await Preferences.get({
      key:'admin'
    })
    return data.value;
  }
  async removeNotification(){
    await Preferences.remove({
      key:'notifications'
    })
  }
  async setTaxDetails(data:any){
    await Preferences.set({
      key:'taxDetails',
      value:JSON.stringify(data)
    })
  }
  async getTaxDetails(){
    var data:any = await Preferences.get({
      key:'taxDetails'
    })
    return data.value
  }

}
