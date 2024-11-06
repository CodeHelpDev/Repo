import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewcategoryPage } from './viewcategory.page';

const routes: Routes = [
  {
    path: '',
    component: ViewcategoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewcategoryPageRoutingModule {}
