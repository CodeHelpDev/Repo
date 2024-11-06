import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PollsPageRoutingModule } from './polls-routing.module';

import { PollsPage } from './polls.page';
import { HeaderModule } from '../modules/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PollsPageRoutingModule,
    HeaderModule,
    ReactiveFormsModule
  ],
  declarations: [PollsPage]
})
export class PollsPageModule {}
