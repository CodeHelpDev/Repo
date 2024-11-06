import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FirebaseauthPageRoutingModule } from './firebaseauth-routing.module';

import { FirebaseauthPage } from './firebaseauth.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FirebaseauthPageRoutingModule
  ],
  declarations: [FirebaseauthPage]
})
export class FirebaseauthPageModule {}
