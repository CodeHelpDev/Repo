import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FindingSimilarResultsPageRoutingModule } from './finding-similar-results-routing.module';

import { FindingSimilarResultsPage } from './finding-similar-results.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FindingSimilarResultsPageRoutingModule
  ],
  declarations: [FindingSimilarResultsPage]
})
export class FindingSimilarResultsPageModule {}
