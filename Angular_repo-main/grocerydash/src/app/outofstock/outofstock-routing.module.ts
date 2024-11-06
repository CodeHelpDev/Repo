import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OutofstockPage } from './outofstock.page';

const routes: Routes = [
  {
    path: '',
    component: OutofstockPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OutofstockPageRoutingModule {}
