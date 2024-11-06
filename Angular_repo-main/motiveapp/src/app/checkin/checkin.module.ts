import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckinPageRoutingModule } from './checkin-routing.module';

import { CheckinPage } from './checkin.page';
import { HeaderModule } from '../modules/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CheckinPageRoutingModule,
    HeaderModule
  ],
  declarations: [CheckinPage]
})
export class CheckinPageModule {}
