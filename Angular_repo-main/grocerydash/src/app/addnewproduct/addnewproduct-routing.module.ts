import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddnewproductPage } from './addnewproduct.page';

const routes: Routes = [
  {
    path: '',
    component: AddnewproductPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddnewproductPageRoutingModule {}
