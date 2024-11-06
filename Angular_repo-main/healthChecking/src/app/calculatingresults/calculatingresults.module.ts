import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalculatingresultsPageRoutingModule } from './calculatingresults-routing.module';

import { CalculatingresultsPage } from './calculatingresults.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalculatingresultsPageRoutingModule
  ],
  declarations: [CalculatingresultsPage]
})
export class CalculatingresultsPageModule {}
