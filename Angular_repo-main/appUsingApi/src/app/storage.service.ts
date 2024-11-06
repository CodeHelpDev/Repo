import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { GetResult, Preferences } from '@capacitor/preferences';
import { MenuController } from '@ionic/angular';



@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor(
    public router : Router,
    public menu :MenuController
  ) { }
  
  async set(key: string, value: any): Promise<void> {
    await Preferences.set({
      key: key,
      value: JSON.stringify(value),
    });
  }

  async get(key: string): Promise<any> {
    const data: any = await Preferences.get({ key: key });
    return JSON.parse(data?.value);
  }

  clear(key:any){
    Preferences.clear();
    this.menu.close();
    this.router.navigate(['/login']);
  }
}
