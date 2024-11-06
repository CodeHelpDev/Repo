import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomcomponentPageRoutingModule } from './customcomponent-routing.module';

import { CustomcomponentPage } from './customcomponent.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomcomponentPageRoutingModule
  ],
  declarations: [CustomcomponentPage]
})
export class CustomcomponentPageModule {}
