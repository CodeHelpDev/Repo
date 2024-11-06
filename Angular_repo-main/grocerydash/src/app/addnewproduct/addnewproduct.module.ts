import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddnewproductPageRoutingModule } from './addnewproduct-routing.module';

import { AddnewproductPage } from './addnewproduct.page';
import { TopModule } from '../common/top/top.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddnewproductPageRoutingModule,
    TopModule,
    ReactiveFormsModule
  ],
  declarations: [AddnewproductPage]
})
export class AddnewproductPageModule {}
