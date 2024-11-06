import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalculatingresultsPage } from './calculatingresults.page';

const routes: Routes = [
  {
    path: '',
    component: CalculatingresultsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalculatingresultsPageRoutingModule {}
