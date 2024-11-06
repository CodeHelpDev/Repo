import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SendrequestPageRoutingModule } from './sendrequest-routing.module';

import { SendrequestPage } from './sendrequest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SendrequestPageRoutingModule
  ],
  declarations: [SendrequestPage]
})
export class SendrequestPageModule {}
