import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManagecustomersPageRoutingModule } from './managecustomers-routing.module';

import { ManagecustomersPage } from './managecustomers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManagecustomersPageRoutingModule
  ],
  declarations: [ManagecustomersPage]
})
export class ManagecustomersPageModule {}
