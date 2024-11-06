import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FirebaselistPageRoutingModule } from './firebaselist-routing.module';

import { FirebaselistPage } from './firebaselist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FirebaselistPageRoutingModule
  ],
  declarations: [FirebaselistPage]
})
export class FirebaselistPageModule {}
