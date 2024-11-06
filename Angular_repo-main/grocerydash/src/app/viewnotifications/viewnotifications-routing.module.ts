import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewnotificationsPage } from './viewnotifications.page';

const routes: Routes = [
  {
    path: '',
    component: ViewnotificationsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewnotificationsPageRoutingModule {}
