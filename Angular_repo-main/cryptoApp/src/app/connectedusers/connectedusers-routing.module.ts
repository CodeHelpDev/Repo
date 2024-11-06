import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConnectedusersPage } from './connectedusers.page';

const routes: Routes = [
  {
    path: '',
    component: ConnectedusersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConnectedusersPageRoutingModule {}
