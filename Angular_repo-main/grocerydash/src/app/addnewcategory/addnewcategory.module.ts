import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddnewcategoryPageRoutingModule } from './addnewcategory-routing.module';

import { AddnewcategoryPage } from './addnewcategory.page';
import { TopModule } from '../common/top/top.module';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddnewcategoryPageRoutingModule,
    TopModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  declarations: [AddnewcategoryPage]
})
export class AddnewcategoryPageModule {}
