import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormvaliPage } from './formvali.page';

const routes: Routes = [
  {
    path: '',
    component: FormvaliPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormvaliPageRoutingModule {}
