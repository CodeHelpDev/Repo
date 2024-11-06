import { Injectable } from '@angular/core';
import { Dialog } from '@capacitor/dialog';
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }
  async setValue(data: any) {
    await Preferences.set({
      key: 'regUsers',
      value: JSON.stringify(data)
    })
  }
  async getValue() {
    var data = await Preferences.get({
      key: 'regUsers'
    })
    return data.value
  }
  async showAlert(title: string, msg: string) {
    await Dialog.alert({
      title: title,
      message: msg
    })
  }
}
