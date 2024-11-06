import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewcategoryPageRoutingModule } from './viewcategory-routing.module';

import { ViewcategoryPage } from './viewcategory.page';
import { TopModule } from '../common/top/top.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewcategoryPageRoutingModule,
    TopModule
  ],
  declarations: [ViewcategoryPage]
})
export class ViewcategoryPageModule {}
