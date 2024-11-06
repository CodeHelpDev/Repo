import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddnewbannerPageRoutingModule } from './addnewbanner-routing.module';

import { AddnewbannerPage } from './addnewbanner.page';
import { TopModule } from '../common/top/top.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddnewbannerPageRoutingModule,
    TopModule,
    ReactiveFormsModule
  ],
  declarations: [AddnewbannerPage]
})
export class AddnewbannerPageModule {}
