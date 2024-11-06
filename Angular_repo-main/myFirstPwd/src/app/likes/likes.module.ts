import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LikesPageRoutingModule } from './likes-routing.module';

import { LikesPage } from './likes.page';
import { TopModule } from '../modules/top/top.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LikesPageRoutingModule,
    TopModule
  ],
  declarations: [LikesPage]
})
export class LikesPageModule {}
