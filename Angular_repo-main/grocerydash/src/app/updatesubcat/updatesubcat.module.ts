import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdatesubcatPageRoutingModule } from './updatesubcat-routing.module';

import { UpdatesubcatPage } from './updatesubcat.page';
import { TopModule } from '../common/top/top.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdatesubcatPageRoutingModule,
    ReactiveFormsModule,
    TopModule
  ],
  declarations: [UpdatesubcatPage]
})
export class UpdatesubcatPageModule {}
