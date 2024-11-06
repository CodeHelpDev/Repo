import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConnectedusersPageRoutingModule } from './connectedusers-routing.module';

import { ConnectedusersPage } from './connectedusers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConnectedusersPageRoutingModule
  ],
  declarations: [ConnectedusersPage]
})
export class ConnectedusersPageModule {}
