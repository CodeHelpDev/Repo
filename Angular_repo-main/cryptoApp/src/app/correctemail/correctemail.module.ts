import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CorrectemailPageRoutingModule } from './correctemail-routing.module';

import { CorrectemailPage } from './correctemail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CorrectemailPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CorrectemailPage]
})
export class CorrectemailPageModule {}
