import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MobilenoPageRoutingModule } from './mobileno-routing.module';

import { MobilenoPage } from './mobileno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MobilenoPageRoutingModule
  ],
  declarations: [MobilenoPage]
})
export class MobilenoPageModule {}
