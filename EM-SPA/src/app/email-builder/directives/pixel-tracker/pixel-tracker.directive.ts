import { Directive, Input, ElementRef } from '@angular/core';
import { ElementBase } from 'src/app/shared/models/email/elements/elementBase';

@Directive({
  selector: '[appPixelTracker]'
})
export class PixelTrackerDirective {

  constructor(private el: ElementRef) { }

  @Input() appPixelTracker: ElementBase;

  @Input()
  set appPixelTrackerPercentageValue(newValue: number) {
    this.appPixelTracker.widthInPixels = this.el.nativeElement.clientWidth;
  }

}
