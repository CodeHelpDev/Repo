import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewnotificationsPageRoutingModule } from './viewnotifications-routing.module';

import { ViewnotificationsPage } from './viewnotifications.page';
import { TopModule } from '../common/top/top.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TopModule,
    ViewnotificationsPageRoutingModule
  ],
  declarations: [ViewnotificationsPage]
})
export class ViewnotificationsPageModule {}
