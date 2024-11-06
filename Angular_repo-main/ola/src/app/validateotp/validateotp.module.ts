import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ValidateotpPageRoutingModule } from './validateotp-routing.module';

import { ValidateotpPage } from './validateotp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ValidateotpPageRoutingModule
  ],
  declarations: [ValidateotpPage]
})
export class ValidateotpPageModule {}
