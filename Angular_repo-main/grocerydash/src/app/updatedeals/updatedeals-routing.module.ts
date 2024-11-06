import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdatedealsPage } from './updatedeals.page';

const routes: Routes = [
  {
    path: '',
    component: UpdatedealsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdatedealsPageRoutingModule {}
