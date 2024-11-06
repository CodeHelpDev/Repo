import { NgModule, importProvidersFrom } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyvehiclesPageRoutingModule } from './myvehicles-routing.module';

import { MyvehiclesPage } from './myvehicles.page';
import { TopModule } from '../modules/top/top.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyvehiclesPageRoutingModule,TopModule
  ],
  declarations: [MyvehiclesPage]
})
export class MyvehiclesPageModule {}
