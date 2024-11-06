import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PreparePageRoutingModule } from './prepare-routing.module';

import { PreparePage } from './prepare.page';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { SharedModule } from '../module/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PreparePageRoutingModule,
    SharedModule
  ],
  declarations: [PreparePage],
  providers: [ provideHttpClient(withInterceptorsFromDi())] // add it here
})
export class PreparePageModule {}
