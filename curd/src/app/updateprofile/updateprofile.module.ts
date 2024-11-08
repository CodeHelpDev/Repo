import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateprofilePageRoutingModule } from './updateprofile-routing.module';

import { UpdateprofilePage } from './updateprofile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateprofilePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [UpdateprofilePage]
})
export class UpdateprofilePageModule {}
