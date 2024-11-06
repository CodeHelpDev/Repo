import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RealestatePageRoutingModule } from './realestate-routing.module';

import { RealestatePage } from './realestate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RealestatePageRoutingModule
  ],
  declarations: [RealestatePage]
})
export class RealestatePageModule {}
