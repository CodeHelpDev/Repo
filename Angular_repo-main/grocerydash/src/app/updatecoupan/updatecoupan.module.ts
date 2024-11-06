import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdatecoupanPageRoutingModule } from './updatecoupan-routing.module';

import { UpdatecoupanPage } from './updatecoupan.page';
import { TopModule } from '../common/top/top.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdatecoupanPageRoutingModule,
    TopModule,
    ReactiveFormsModule
  ],
  declarations: [UpdatecoupanPage]
})
export class UpdatecoupanPageModule {}
