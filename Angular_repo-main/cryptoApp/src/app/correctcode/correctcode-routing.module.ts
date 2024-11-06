import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CorrectcodePage } from './correctcode.page';

const routes: Routes = [
  {
    path: '',
    component: CorrectcodePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CorrectcodePageRoutingModule {}
