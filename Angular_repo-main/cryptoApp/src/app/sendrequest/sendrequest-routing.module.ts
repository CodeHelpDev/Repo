import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SendrequestPage } from './sendrequest.page';

const routes: Routes = [
  {
    path: '',
    component: SendrequestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SendrequestPageRoutingModule {}
