import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TravelPageRoutingModule } from './travel-routing.module';

import { TravelPage } from './travel.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TravelPageRoutingModule,
    HttpClientModule
  ],
  declarations: [TravelPage]
})
export class TravelPageModule {}
