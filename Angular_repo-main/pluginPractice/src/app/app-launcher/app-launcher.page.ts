import { Component, OnInit } from '@angular/core';
import { AppLauncher } from '@capacitor/app-launcher';
import { Browser } from '@capacitor/browser';
import { Clipboard } from '@capacitor/clipboard';
import { CapacitorCookies, HttpResponse } from '@capacitor/core';
import { Dialog } from '@capacitor/dialog';
import { Haptics, ImpactStyle } from '@capacitor/haptics';
import { CapacitorHttp } from '@capacitor/core';
import { Network } from '@capacitor/network';
import { ScreenReader } from '@capacitor/screen-reader';
import { Share } from '@capacitor/share';
import { Toast } from '@capacitor/toast';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-app-launcher',
  templateUrl: './app-launcher.page.html',
  styleUrls: ['./app-launcher.page.scss'],
})
export class AppLauncherPage implements OnInit {
  App:any;
  constructor(
    public toastCtrl:ToastController
  ) { }

  ngOnInit() {
    
  }
  async canOpenUrl (){
    var Url = await AppLauncher.canOpenUrl({url:'com.getcapacitor.myapp'});
    console.log('Can Open Url',Url);
  }
  async openUrl(){
    await AppLauncher.openUrl({url:'https://www.youtube.com/'});
  }
  async browser(){
    await Browser.open({url:'http://capacitorjs.com/'});
  }
  async writeToClipBoard(){
    await Clipboard.write({
      string:'Hii World'
    });
  }
  async copyFromClipBoard(){
    var  value = await Clipboard.read();
    console.log('Copt To Clipboard',value.value);
  }
  //Cookies 
  async getCookies(){
    return document.cookie;
  }
  async setCookie(key:any,value:any){
    document.cookie= key+'='+value
  }
  async setCapacitorCookie(){
    await CapacitorCookies.setCookie({
      url:'http://example.com',
      key:'language',
      value: 'en',
    });
  };
  async deleteCookies(url:any) {
    await CapacitorCookies.deleteCookie({
      url:'http://example.com',
      key:'language'
    })
    
  }
  async clearCookiesOnUrl(url:any){
    await CapacitorCookies.clearAllCookies();
  };
  async clearAllCookies(){
    await CapacitorCookies.clearAllCookies();
  }
  async showAlert(){
    await Dialog.alert({
      title:'This is Title',
      message:'this is Message'
    })
    console.log('ok');
  }
  async showConfirm(){
    var confirmValue = await Dialog.confirm({
      title:'Confirm Title',
      message:'Confirm Dialog Message'
    })
    console.log('confirmValue',confirmValue.value);
  }
  async showPrompt(){
    var promptValue= await Dialog.prompt({
      title:'Prompt Title',
      message:'Prompt Dialog Message'
    })
    console.log('promptValue',promptValue.value);
  }
  async hapticsImpactMedium(){
    await Haptics.impact({style:ImpactStyle.Light});
  }
  async doGet(){
    const option ={
      url:'https://jsonplaceholder.typicode.com/posts',
      headers:{'Fake':'Fake Header'},
      params:{size:'XL'},
    }
    const response :HttpResponse = await CapacitorHttp.get(option);
    console.log('response',response.data);
  }
  // Post Pending
  async doPost(){
    const option ={
      url:'https://reqres.in/',
      headers:{'Fake-header':'Fake Value'},
      data:{
           "name": "ayus",
            "job": "Dev"
      }
    }
    const response : HttpResponse = await CapacitorHttp.post(option);
    console.log('response',response);
  }
  async checkNetwork(){
    var status = await Network.getStatus();
    console.log('status',status);
    //second Method
    Network.addListener('networkStatusChange', status => {
      console.log('Network status changed', status);
    });
  }
  async screenReader (){
    const value = await ScreenReader.isEnabled()
    console.log('Voice over enabled',value);
  }
  async shareFun(){
    await Share.share({
      text:'Really awesome thing you need to see right meow',      
    })
  }
  async showHelloToast(){
    console.log('sdfbkj')
    const toast = await this.toastCtrl.create({  
      message: 'LeaveType was Selected Successfully',
      position: 'top',  
      duration: 3000  
    });  
    toast.present();  
  
  }

 

}
