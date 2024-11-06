import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DealsPageRoutingModule } from './deals-routing.module';

import { DealsPage } from './deals.page';
import { TopModule } from '../common/top/top.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DealsPageRoutingModule,
    TopModule
  ],
  declarations: [DealsPage]
})
export class DealsPageModule {}
