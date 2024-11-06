import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignUpWithEmailPage } from './sign-up-with-email.page';

const routes: Routes = [
  {
    path: '',
    component: SignUpWithEmailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignUpWithEmailPageRoutingModule {}
