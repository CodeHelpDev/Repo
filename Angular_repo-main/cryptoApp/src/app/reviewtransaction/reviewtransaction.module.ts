import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReviewtransactionPageRoutingModule } from './reviewtransaction-routing.module';

import { ReviewtransactionPage } from './reviewtransaction.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReviewtransactionPageRoutingModule
  ],
  declarations: [ReviewtransactionPage]
})
export class ReviewtransactionPageModule {}
