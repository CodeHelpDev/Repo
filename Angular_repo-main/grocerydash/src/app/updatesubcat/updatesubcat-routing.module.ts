import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdatesubcatPage } from './updatesubcat.page';

const routes: Routes = [
  {
    path: '',
    component: UpdatesubcatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdatesubcatPageRoutingModule {}
