import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FindingSimilarResultsPage } from './finding-similar-results.page';

const routes: Routes = [
  {
    path: '',
    component: FindingSimilarResultsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FindingSimilarResultsPageRoutingModule {}
