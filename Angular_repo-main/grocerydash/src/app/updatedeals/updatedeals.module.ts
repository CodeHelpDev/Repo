import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdatedealsPageRoutingModule } from './updatedeals-routing.module';

import { UpdatedealsPage } from './updatedeals.page';
import { TopModule } from '../common/top/top.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdatedealsPageRoutingModule,
    TopModule,
    ReactiveFormsModule
  ],
  declarations: [UpdatedealsPage]
})
export class UpdatedealsPageModule {}
