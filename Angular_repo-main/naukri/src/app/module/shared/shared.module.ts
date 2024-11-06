import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { ProfileComponent } from 'src/app/components/profile/profile.component';
import { AtsComponent } from 'src/app/components/ats/ats.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserFormComponent } from 'src/app/components/user-form/user-form.component';
import { NaukriCampusHeaderComponent } from 'src/app/components/naukri-campus-header/naukri-campus-header.component';
@NgModule({
  declarations: [
    HeaderComponent,
    NaukriCampusHeaderComponent,
    FooterComponent,
    ProfileComponent,
    AtsComponent,
    UserFormComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    ProfileComponent,
    AtsComponent,
    UserFormComponent,
    NaukriCampusHeaderComponent
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
