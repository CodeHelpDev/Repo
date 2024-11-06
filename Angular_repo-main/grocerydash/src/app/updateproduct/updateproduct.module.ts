import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateproductPageRoutingModule } from './updateproduct-routing.module';

import { UpdateproductPage } from './updateproduct.page';
import { TopModule } from '../common/top/top.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateproductPageRoutingModule,
    TopModule,
    ReactiveFormsModule
  ],
  declarations: [UpdateproductPage]
})
export class UpdateproductPageModule {}
