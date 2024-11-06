import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddnewdealPage } from './addnewdeal.page';

const routes: Routes = [
  {
    path: '',
    component: AddnewdealPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddnewdealPageRoutingModule {}
