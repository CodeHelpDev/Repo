import { Component, enableProdMode, OnInit } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import { Camera, CameraResultType, Photo } from '@capacitor/camera';
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import { environment } from 'src/environments/environment.prod';
import { Capacitor } from '@capacitor/core';
import { Router } from '@angular/router';
declare var jQuery:any;

@Component({
  selector: 'app-visualsearch',
  templateUrl: './visualsearch.page.html',
  styleUrls: ['./visualsearch.page.scss'],
})
export class VisualsearchPage implements OnInit {
  isCapture: boolean = false;
  stream: any;
  imageElement: any;
  photos:any;
  
  constructor(
    public router:Router
  ) { }

  ngOnInit() {
    defineCustomElements(window);
    if (environment.production) {
      enableProdMode();
    }
  }

  async clickPhotos(event: any) {
    try {
      console.log(event.target)
      var image:any = await Camera.getPhoto({
        quality: 190,
        allowEditing: true,
        saveToGallery:true,
        resultType: CameraResultType.DataUrl
      });
      console.log(image)
      if(image.dataUrl){
        await this.saveImagePWA(image.dataUrl);
      }
      var imageUrl: any = image.dataUrl;
    }
    catch (error) {
      console.error('Error taking picture:', error);
      console.log(event.target)
    }
  }
  async saveImagePWA(imageData: string) {
    // Check if the app is running as a PWA
    if (Capacitor.getPlatform() === 'web') {
      try {
        // Convert base64 to blob
        const response = await fetch(imageData);
        const blob = await response.blob();
  
        // Create a temporary URL for the blob
        const url = window.URL.createObjectURL(blob);
  
        // Create a link element
        const link = document.createElement('a');
        link.href = url;
        link.download = `image_${new Date().getTime()}.jpg`;
  
        // Append to the document, click it, and remove it
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
  
        // Release the object URL
        window.URL.revokeObjectURL(url);
  
        console.log('Image download initiated');
      } catch (error) {
        console.error('Error saving image:', error);
        throw error;
      }
    } else {
      console.warn('This method should only be used in PWA context');
    }
  }
  openFileUpload(){
    jQuery("#fileInput").trigger('click');
  }
  onChange(event:any){
    console.log(event);
    console.log(event.srcElement.files[0])
    var file = event.srcElement.files[0];
    var reader = new FileReader();
    reader.onloadend=()=>{
      var base64String = reader.result as string;
      console.log(base64String);
      this.setImage(base64String);
      this.router.navigate(['/searchbyimage']);
    }
    if(file){
      reader.readAsDataURL(file);
    }
  }
  async setImage(data: any) {
    await Preferences.set({
      key: 'image',
      value: data
    })
  }


}
