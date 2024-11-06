import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from 'src/app/components/board/board.component';



@NgModule({
  declarations: [BoardComponent],
  imports: [
    CommonModule
  ],
  exports:[BoardComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class SharedModule { }
