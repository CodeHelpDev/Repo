import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddnewbannerPage } from './addnewbanner.page';

const routes: Routes = [
  {
    path: '',
    component: AddnewbannerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddnewbannerPageRoutingModule {}
