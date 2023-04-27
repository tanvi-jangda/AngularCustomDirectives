import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCompSuccess]'
})
export class CompSuccessDirective {

  constructor(public eObj:ElementRef) { 
  }
  @HostListener('mouseover') onmouseover(){
    this.eObj.nativeElement.style.color="green";
  }

  @HostListener('mouseleave') onmouseleave(){
  this.eObj.nativeElement.style.color="black";
  }
}
