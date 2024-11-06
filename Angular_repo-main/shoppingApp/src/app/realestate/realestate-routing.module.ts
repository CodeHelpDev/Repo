import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RealestatePage } from './realestate.page';

const routes: Routes = [
  {
    path: '',
    component: RealestatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RealestatePageRoutingModule {}
