import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FirebaselistPage } from './firebaselist.page';

const routes: Routes = [
  {
    path: '',
    component: FirebaselistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FirebaselistPageRoutingModule {}
