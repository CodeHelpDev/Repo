import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoupansPage } from './coupans.page';

const routes: Routes = [
  {
    path: '',
    component: CoupansPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoupansPageRoutingModule {}
