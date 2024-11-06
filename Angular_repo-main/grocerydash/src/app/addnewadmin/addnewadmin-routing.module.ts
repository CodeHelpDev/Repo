import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddnewadminPage } from './addnewadmin.page';

const routes: Routes = [
  {
    path: '',
    component: AddnewadminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddnewadminPageRoutingModule {}
