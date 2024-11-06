import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SettingsPageRoutingModule } from './settings-routing.module';
import { SettingsPage } from './settings.page';
import { TopModule } from '../common/top/top.module';
import { Select2Module } from 'ng-select2-component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SettingsPageRoutingModule,
    TopModule,
    ReactiveFormsModule,
    Select2Module
  ],
  declarations: [SettingsPage]
})
export class SettingsPageModule {}
