import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NewCarsPageRoutingModule } from './new-cars-routing.module';
import { NewCarsPage } from './new-cars.page';
import { TopModule } from '../modules/top/top.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewCarsPageRoutingModule,
    TopModule,
    NgxPaginationModule
  ],
  declarations: [NewCarsPage]
})
export class NewCarsPageModule {}
