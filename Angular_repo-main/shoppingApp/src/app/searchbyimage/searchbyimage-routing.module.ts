import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchbyimagePage } from './searchbyimage.page';

const routes: Routes = [
  {
    path: '',
    component: SearchbyimagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchbyimagePageRoutingModule {}
