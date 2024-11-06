import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignUpWithEmailPageRoutingModule } from './sign-up-with-email-routing.module';

import { SignUpWithEmailPage } from './sign-up-with-email.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignUpWithEmailPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [SignUpWithEmailPage]
})
export class SignUpWithEmailPageModule {}
