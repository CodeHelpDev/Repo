import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParticipantsPageRoutingModule } from './participants-routing.module';

import { ParticipantsPage } from './participants.page';
import { HeaderModule } from '../modules/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParticipantsPageRoutingModule,
    HeaderModule,
    ReactiveFormsModule
  ],
  declarations: [ParticipantsPage]
})
export class ParticipantsPageModule {}
