import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IncorrectemailPage } from './incorrectemail.page';

const routes: Routes = [
  {
    path: '',
    component: IncorrectemailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IncorrectemailPageRoutingModule {}
