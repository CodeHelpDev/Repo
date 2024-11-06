import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BannerPageRoutingModule } from './banner-routing.module';

import { BannerPage } from './banner.page';
import { TopModule } from '../common/top/top.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BannerPageRoutingModule,
    TopModule
  ],
  declarations: [BannerPage]
})
export class BannerPageModule {}
