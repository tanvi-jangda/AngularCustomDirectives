import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCompFailure]'
})
export class CompFailureDirective {

  constructor(public eObj:ElementRef) { }
  @HostListener('mouseover') onmouseover(){
    this.eObj.nativeElement.style.color="red";
  }

  @HostListener('mouseleave') onmouseleave(){
  this.eObj.nativeElement.style.color="black";
  }
}