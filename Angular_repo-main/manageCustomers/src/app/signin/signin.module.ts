import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SigninPageRoutingModule } from './signin-routing.module';
import { SigninPage } from './signin.page';
import { SignupPage } from '../signup/signup.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SigninPageRoutingModule
  ],
  declarations: [SigninPage],
  providers:[SignupPage]
})
export class SigninPageModule {}
