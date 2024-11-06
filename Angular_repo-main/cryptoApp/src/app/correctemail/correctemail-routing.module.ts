import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CorrectemailPage } from './correctemail.page';

const routes: Routes = [
  {
    path: '',
    component: CorrectemailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CorrectemailPageRoutingModule {}
