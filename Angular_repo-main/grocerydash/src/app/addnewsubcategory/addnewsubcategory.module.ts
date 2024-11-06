import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddnewsubcategoryPageRoutingModule } from './addnewsubcategory-routing.module';

import { AddnewsubcategoryPage } from './addnewsubcategory.page';
import { TopModule } from '../common/top/top.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddnewsubcategoryPageRoutingModule,
    TopModule,
    ReactiveFormsModule
  ],
  declarations: [AddnewsubcategoryPage]
})
export class AddnewsubcategoryPageModule {}
