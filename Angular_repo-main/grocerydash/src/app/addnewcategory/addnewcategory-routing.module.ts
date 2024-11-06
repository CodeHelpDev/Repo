import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddnewcategoryPage } from './addnewcategory.page';

const routes: Routes = [
  {
    path: '',
    component: AddnewcategoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddnewcategoryPageRoutingModule {}
