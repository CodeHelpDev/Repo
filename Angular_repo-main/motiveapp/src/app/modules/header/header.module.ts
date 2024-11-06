import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponent } from 'src/app/components/common/common.component';



@NgModule({
  declarations: [CommonComponent],
  imports: [
    CommonModule,
  ],
  exports:[CommonComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class HeaderModule { }
