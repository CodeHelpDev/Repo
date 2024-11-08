import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddproductsPageRoutingModule } from './addproducts-routing.module';

import { AddproductsPage } from './addproducts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddproductsPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AddproductsPage]
})
export class AddproductsPageModule {}
