import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FirebaseauthPage } from './firebaseauth.page';

const routes: Routes = [
  {
    path: '',
    component: FirebaseauthPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FirebaseauthPageRoutingModule {}
