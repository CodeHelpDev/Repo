import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewDealsPage } from './view-deals.page';

const routes: Routes = [
  {
    path: '',
    component: ViewDealsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewDealsPageRoutingModule {}
