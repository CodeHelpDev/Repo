import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewproductPageRoutingModule } from './viewproduct-routing.module';

import { ViewproductPage } from './viewproduct.page';
import { TopModule } from '../common/top/top.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewproductPageRoutingModule,
    TopModule
  ],
  declarations: [ViewproductPage]
})
export class ViewproductPageModule {}
