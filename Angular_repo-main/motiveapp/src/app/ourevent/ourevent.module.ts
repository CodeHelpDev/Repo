import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OureventPageRoutingModule } from './ourevent-routing.module';

import { OureventPage } from './ourevent.page';
import { CommonComponent } from '../components/common/common.component';
import { HeaderModule } from '../modules/header/header.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OureventPageRoutingModule,
    HeaderModule
  ],
  declarations: [OureventPage]
})
export class OureventPageModule {}
