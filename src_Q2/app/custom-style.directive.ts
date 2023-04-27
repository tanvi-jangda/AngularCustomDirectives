import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomStyle]'
})
export class CustomStyleDirective {

  constructor(public eObj:ElementRef) {
    this.eObj.nativeElement.style.background="yellow";
    this.eObj.nativeElement.style.fontWeight="bold";
   }

}
