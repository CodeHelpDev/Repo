import { NgModule, importProvidersFrom } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileSettingPageRoutingModule } from './profile-setting-routing.module';

import { ProfileSettingPage } from './profile-setting.page';
import { TopModule } from '../modules/top/top.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileSettingPageRoutingModule,TopModule,ReactiveFormsModule
  ],
  declarations: [ProfileSettingPage]
})
export class ProfileSettingPageModule {}
