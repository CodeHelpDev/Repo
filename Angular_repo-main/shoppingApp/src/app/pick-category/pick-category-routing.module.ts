import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PickCategoryPage } from './pick-category.page';

const routes: Routes = [
  {
    path: '',
    component: PickCategoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PickCategoryPageRoutingModule {}
