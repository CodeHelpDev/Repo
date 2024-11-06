import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QwikPageRoutingModule } from './qwik-routing.module';

import { QwikPage } from './qwik.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QwikPageRoutingModule
  ],
  declarations: [QwikPage]
})
export class QwikPageModule {}
