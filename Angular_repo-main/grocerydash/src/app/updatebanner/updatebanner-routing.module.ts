import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdatebannerPage } from './updatebanner.page';

const routes: Routes = [
  {
    path: '',
    component: UpdatebannerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdatebannerPageRoutingModule {}
