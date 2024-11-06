import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[appValidate]',
  standalone: true
})
export class ValidateDirective {
@Input()min:number | string | undefined
  constructor() { }

}
