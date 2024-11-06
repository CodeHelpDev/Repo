import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchbyimagePageRoutingModule } from './searchbyimage-routing.module';

import { SearchbyimagePage } from './searchbyimage.page';
import { ImageCropperComponent } from 'ngx-image-cropper';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchbyimagePageRoutingModule,
    ImageCropperComponent,
    
  ],
  // schemas:[CUSTOM_ELEMENTS_SCHEMA],
  declarations: [SearchbyimagePage]
})
export class SearchbyimagePageModule {}
