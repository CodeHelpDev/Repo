import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VisualsearchPage } from './visualsearch.page';

const routes: Routes = [
  {
    path: '',
    component: VisualsearchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisualsearchPageRoutingModule {}
