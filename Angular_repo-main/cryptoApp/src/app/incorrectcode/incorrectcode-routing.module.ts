import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IncorrectcodePage } from './incorrectcode.page';

const routes: Routes = [
  {
    path: '',
    component: IncorrectcodePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IncorrectcodePageRoutingModule {}
