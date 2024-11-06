import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddnewsubcategoryPage } from './addnewsubcategory.page';

const routes: Routes = [
  {
    path: '',
    component: AddnewsubcategoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddnewsubcategoryPageRoutingModule {}
