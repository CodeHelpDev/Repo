import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StaffPageRoutingModule } from './staff-routing.module';

import { StaffPage } from './staff.page';
import { HeaderModule } from '../modules/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StaffPageRoutingModule,
    HeaderModule,    
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'})
  ],
  declarations: [StaffPage]
})
export class StaffPageModule {}
