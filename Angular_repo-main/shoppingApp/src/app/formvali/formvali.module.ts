import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormvaliPageRoutingModule } from './formvali-routing.module';

import { FormvaliPage } from './formvali.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormvaliPageRoutingModule
  ],
  declarations: [FormvaliPage]
})
export class FormvaliPageModule {}
