import { Component, createPlatform, OnInit, ViewChild } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import { ImageCroppedEvent, ImageCropperComponent, LoadedImage } from 'ngx-image-cropper';
import { DomSanitizer } from '@angular/platform-browser';
import 'hammerjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-searchbyimage',
  templateUrl: './searchbyimage.page.html',
  styleUrls: ['./searchbyimage.page.scss'],
})
export class SearchbyimagePage implements OnInit {
  imageString: any;
  imageChangedEvent: any;
  croppedImage: any = '';
  imageBase64: any;
  isSearching: boolean = false;
  cropdImage: any;
  @ViewChild('cropper') imageCropper!: ImageCropperComponent;


  constructor(
    public sanitizer: DomSanitizer,
    public router:Router
  ) { }

  async ngOnInit() {
    var data: any = await this.getImage();
    this.imageString = data.value;
    this.fileChangeEvent(this.imageString);
  }
  fileChangeEvent(event: any): void {
    // this.imageChangedEvent=event;
    this.imageBase64 = event;
    // console.log(this.imageBase64);
  }
  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = this.sanitizer.bypassSecurityTrustUrl(event.objectUrl || event.base64 || '');

  }
  imageLoaded(image: LoadedImage) {
    console.log('imageLoaded', image);
  }
  cropperReady() {
    console.log('croppr')
    var temp: any = this.imageCropper.crop('base64');
    console.log(temp.base64);
    this.imageBase64 = temp.base64;

  }
  onClickStartSearching() {
    this.isSearching = true;
    if(this.isSearching===true){
      this.router.navigate(['/finding-similar-results']);
    }
  }

  loadImageFailed() {
    console.log('this.loadImageFailed');
  }

  async getImage() {
    var data: any = await Preferences.get({
      key: 'image',
    })
    return data;
  }

}
