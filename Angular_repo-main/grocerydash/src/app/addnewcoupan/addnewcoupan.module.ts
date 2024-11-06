import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddnewcoupanPageRoutingModule } from './addnewcoupan-routing.module';

import { AddnewcoupanPage } from './addnewcoupan.page';
import { TopModule } from '../common/top/top.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddnewcoupanPageRoutingModule,
    TopModule,
    ReactiveFormsModule
  ],
  declarations: [AddnewcoupanPage]
})
export class AddnewcoupanPageModule {}
