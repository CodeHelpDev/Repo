import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomcomponentPage } from './customcomponent.page';

const routes: Routes = [
  {
    path: '',
    component: CustomcomponentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomcomponentPageRoutingModule {}
