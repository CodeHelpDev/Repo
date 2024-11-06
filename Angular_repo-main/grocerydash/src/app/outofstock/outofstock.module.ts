import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OutofstockPageRoutingModule } from './outofstock-routing.module';

import { OutofstockPage } from './outofstock.page';
import { TopModule } from '../common/top/top.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OutofstockPageRoutingModule,
    TopModule
  ],
  declarations: [OutofstockPage]
})
export class OutofstockPageModule {}
