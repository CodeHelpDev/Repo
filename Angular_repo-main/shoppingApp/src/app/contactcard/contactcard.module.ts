import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactcardPageRoutingModule } from './contactcard-routing.module';

import { ContactcardPage } from './contactcard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactcardPageRoutingModule
  ],
  declarations: [ContactcardPage]
})
export class ContactcardPageModule {}
