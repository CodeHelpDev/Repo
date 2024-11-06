import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MobilenoPage } from './mobileno.page';

const routes: Routes = [
  {
    path: '',
    component: MobilenoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MobilenoPageRoutingModule {}
