import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoupansPageRoutingModule } from './coupans-routing.module';

import { CoupansPage } from './coupans.page';
import { TopModule } from '../common/top/top.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoupansPageRoutingModule,
    TopModule
  ],
  declarations: [CoupansPage]
})
export class CoupansPageModule {}
