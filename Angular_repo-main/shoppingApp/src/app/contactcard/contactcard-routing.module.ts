import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactcardPage } from './contactcard.page';

const routes: Routes = [
  {
    path: '',
    component: ContactcardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactcardPageRoutingModule {}
