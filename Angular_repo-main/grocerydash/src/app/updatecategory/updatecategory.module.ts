import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdatecategoryPageRoutingModule } from './updatecategory-routing.module';

import { UpdatecategoryPage } from './updatecategory.page';
import { TopModule } from '../common/top/top.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdatecategoryPageRoutingModule,
    TopModule,
    ReactiveFormsModule
  ],
  declarations: [UpdatecategoryPage]
})
export class UpdatecategoryPageModule {}
