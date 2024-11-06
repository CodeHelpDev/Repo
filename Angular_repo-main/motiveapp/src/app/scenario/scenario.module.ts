import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScenarioPageRoutingModule } from './scenario-routing.module';

import { ScenarioPage } from './scenario.page';
import { HeaderModule } from '../modules/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScenarioPageRoutingModule,
    HeaderModule,
    ReactiveFormsModule
  ],
  declarations: [ScenarioPage],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class ScenarioPageModule {}
