import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IncorrectcodePageRoutingModule } from './incorrectcode-routing.module';

import { IncorrectcodePage } from './incorrectcode.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IncorrectcodePageRoutingModule
  ],
  declarations: [IncorrectcodePage]
})
export class IncorrectcodePageModule {}
