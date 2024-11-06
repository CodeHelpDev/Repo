import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrdersxPageRoutingModule } from './ordersx-routing.module';

import { OrdersxPage } from './ordersx.page';
import { TopModule } from '../modules/top/top.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrdersxPageRoutingModule,
    TopModule
  ],
  declarations: [OrdersxPage]
})
export class OrdersxPageModule {}
