import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CorrectcodePageRoutingModule } from './correctcode-routing.module';

import { CorrectcodePage } from './correctcode.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CorrectcodePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CorrectcodePage]
})
export class CorrectcodePageModule {}
