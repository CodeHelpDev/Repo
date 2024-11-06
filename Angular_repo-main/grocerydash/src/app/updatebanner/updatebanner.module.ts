import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdatebannerPageRoutingModule } from './updatebanner-routing.module';

import { UpdatebannerPage } from './updatebanner.page';
import { TopModule } from '../common/top/top.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdatebannerPageRoutingModule,
    TopModule,
    ReactiveFormsModule
  ],
  declarations: [UpdatebannerPage]
})
export class UpdatebannerPageModule {}
