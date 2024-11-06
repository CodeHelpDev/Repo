import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Mainpage2Page } from './mainpage2.page';

const routes: Routes = [
  {
    path: '',
    component: Mainpage2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Mainpage2PageRoutingModule {}
