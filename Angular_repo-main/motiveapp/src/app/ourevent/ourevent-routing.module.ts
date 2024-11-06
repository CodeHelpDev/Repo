import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OureventPage } from './ourevent.page';

const routes: Routes = [
  {
    path: '',
    component: OureventPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OureventPageRoutingModule {}
