import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewDealsPageRoutingModule } from './view-deals-routing.module';

import { ViewDealsPage } from './view-deals.page';
import { TopModule } from '../common/top/top.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewDealsPageRoutingModule,
    TopModule
  ],
  declarations: [ViewDealsPage]
})
export class ViewDealsPageModule {}
