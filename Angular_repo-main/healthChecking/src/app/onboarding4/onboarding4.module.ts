import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Onboarding4PageRoutingModule } from './onboarding4-routing.module';

import { Onboarding4Page } from './onboarding4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Onboarding4PageRoutingModule
  ],
  declarations: [Onboarding4Page]
})
export class Onboarding4PageModule {}
