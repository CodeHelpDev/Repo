import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IncorrectemailPageRoutingModule } from './incorrectemail-routing.module';

import { IncorrectemailPage } from './incorrectemail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IncorrectemailPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [IncorrectemailPage]
})
export class IncorrectemailPageModule {}
