import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddnewadminPageRoutingModule } from './addnewadmin-routing.module';

import { AddnewadminPage } from './addnewadmin.page';
import { TopModule } from '../common/top/top.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddnewadminPageRoutingModule,
    TopModule,
    ReactiveFormsModule
  ],
  declarations: [AddnewadminPage]
})
export class AddnewadminPageModule {}
