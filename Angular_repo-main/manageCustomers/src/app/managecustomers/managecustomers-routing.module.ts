import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManagecustomersPage } from './managecustomers.page';

const routes: Routes = [
  {
    path: '',
    component: ManagecustomersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManagecustomersPageRoutingModule {}
