import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GamesPageRoutingModule } from './games-routing.module';

import { GamesPage } from './games.page';
import { HeaderModule } from '../modules/header/header.module';
import { Select2Module } from 'ng-select2-component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GamesPageRoutingModule,
    HeaderModule,
    Select2Module
  ],
  declarations: [GamesPage],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class GamesPageModule {}
