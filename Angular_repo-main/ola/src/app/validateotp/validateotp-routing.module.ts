import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ValidateotpPage } from './validateotp.page';

const routes: Routes = [
  {
    path: '',
    component: ValidateotpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ValidateotpPageRoutingModule {}
