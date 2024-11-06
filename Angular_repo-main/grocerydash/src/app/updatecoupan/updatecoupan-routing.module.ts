import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdatecoupanPage } from './updatecoupan.page';

const routes: Routes = [
  {
    path: '',
    component: UpdatecoupanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdatecoupanPageRoutingModule {}
