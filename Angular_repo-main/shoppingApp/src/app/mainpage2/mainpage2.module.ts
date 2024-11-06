import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Mainpage2PageRoutingModule } from './mainpage2-routing.module';

import { Mainpage2Page } from './mainpage2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Mainpage2PageRoutingModule
  ],
  declarations: [Mainpage2Page]
})
export class Mainpage2PageModule {}
