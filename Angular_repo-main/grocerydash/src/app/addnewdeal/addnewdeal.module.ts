import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddnewdealPageRoutingModule } from './addnewdeal-routing.module';

import { AddnewdealPage } from './addnewdeal.page';
import { TopModule } from '../common/top/top.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddnewdealPageRoutingModule,
    TopModule,
    ReactiveFormsModule
  ],
  declarations: [AddnewdealPage]
})
export class AddnewdealPageModule {}
