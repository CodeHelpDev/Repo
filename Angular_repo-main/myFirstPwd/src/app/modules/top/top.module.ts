import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [HeaderComponent,FooterComponent],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule
  ], exports:[HeaderComponent,
    FooterComponent
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class TopModule { }
