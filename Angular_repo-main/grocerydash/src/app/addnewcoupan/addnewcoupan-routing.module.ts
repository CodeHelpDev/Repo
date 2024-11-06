import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddnewcoupanPage } from './addnewcoupan.page';

const routes: Routes = [
  {
    path: '',
    component: AddnewcoupanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddnewcoupanPageRoutingModule {}
