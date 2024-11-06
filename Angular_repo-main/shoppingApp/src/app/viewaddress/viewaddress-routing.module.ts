import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewaddressPage } from './viewaddress.page';

const routes: Routes = [
  {
    path: '',
    component: ViewaddressPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewaddressPageRoutingModule {}
