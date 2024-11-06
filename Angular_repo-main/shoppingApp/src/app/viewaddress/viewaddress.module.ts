import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewaddressPageRoutingModule } from './viewaddress-routing.module';

import { ViewaddressPage } from './viewaddress.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewaddressPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ViewaddressPage]
})
export class ViewaddressPageModule {}
