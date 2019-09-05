import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appSelector]'
})
export class SelectorDirective {
  @Input() appSelector: any;
  constructor(el: ElementRef) { }

  @HostListener('click', ['$event']) onClick(evt) {
    console.log(this.appSelector);
  }
}
