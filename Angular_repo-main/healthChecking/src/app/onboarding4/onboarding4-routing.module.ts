import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Onboarding4Page } from './onboarding4.page';

const routes: Routes = [
  {
    path: '',
    component: Onboarding4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Onboarding4PageRoutingModule {}
