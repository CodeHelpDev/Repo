import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VisualsearchPageRoutingModule } from './visualsearch-routing.module';

import { VisualsearchPage } from './visualsearch.page';
import { Camera } from '@ionic-native/camera/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VisualsearchPageRoutingModule
  ],

  declarations: [VisualsearchPage]
})
export class VisualsearchPageModule {}
