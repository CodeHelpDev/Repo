import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PasswordverificationPageRoutingModule } from './passwordverification-routing.module';

import { PasswordverificationPage } from './passwordverification.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PasswordverificationPageRoutingModule
  ],
  declarations: [PasswordverificationPage]
})
export class PasswordverificationPageModule {}
