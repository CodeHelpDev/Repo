import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScenarioPage } from './scenario.page';

const routes: Routes = [
  {
    path: '',
    component: ScenarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScenarioPageRoutingModule {}
